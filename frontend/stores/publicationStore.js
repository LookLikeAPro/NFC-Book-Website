import {observable, action, computed, asMap} from "mobx";
import Publication from "models/Publication";
import {callApi, callApiResponse} from "utils/jsonApi";

class PublicationStore {
	@observable publications = asMap({})
	@observable total = 0;
	@observable itemsPerPage = 20;
	@observable pagination = asMap({})
	@observable pendingRequestCount = 0;
	@computed get pages() {
		return Math.floor(this.total/this.itemsPerPage)+1;
	}
	@computed get isLoading() {
		return this.pendingRequestCount > 0;
	}
	@action getModel(id) {
		if (!id) {
			return;
		}
		this.pendingRequestCount++;
		callApi(`/api/v1/publications/${id}`).then(action("getPublication-callback", (result) => {
			let publication = new Publication(result);
			this.publications.set(publication.id, publication);
			this.pendingRequestCount--;
		}));
	}
	@action	getPage(page = 1) {
		this.pendingRequestCount++;
		callApiResponse(`/api/v1/publications?page=${page}`).then(action("getPage-callback", (response) => {
			const results = response.json;
			let pageItems = [];
			for (let result of results) {
				let publication = new Publication(result);
				this.publications.set(publication.id, publication);
				pageItems.push(publication);
			}
			this.pagination.set(page, pageItems);
			this.itemsPerPage = parseInt(response.headers.get("Per-Page"));
			this.total = parseInt(response.headers.get("total"));

			this.pendingRequestCount--;
		}));
	}
}

const publicationStore = new PublicationStore();

export default publicationStore;
