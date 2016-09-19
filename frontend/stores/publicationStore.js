import {observable, action, computed, asMap} from "mobx";
import Publication from "models/Publication";
import {callApi} from "utils/jsonApi";

const itemsPerPage = 25;

class PublicationStore {
	@observable publications = asMap({})
	@observable pagination = asMap({})
	@observable pendingRequestCount = 0;
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
		callApi(`/api/v1/publications?page=${page}`).then(action("getPage-callback", (results) => {
			let pageItems = [];
			for (let result of results) {
				let publication = new Publication(result);
				this.publications.set(publication.id, publication);
				pageItems.push(publication);
			}
			this.pagination.set(page, pageItems);

			this.pendingRequestCount--;
		}));
	}
}

const publicationStore = new PublicationStore();

export default publicationStore;
