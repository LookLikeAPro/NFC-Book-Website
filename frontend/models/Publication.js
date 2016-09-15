import {observable, computed} from "mobx";

class Resource {
	@observable id = "";
	@observable name = "";
	@observable description = "";
	@observable group = "";
	@observable file = "";
	constructor(data) {
		this.id = data.id;
		this.name = data.name;
		this.description = data.description;
		this.group = data.group;
		this.file = data.file_url;
	}
	@computed get displayName() {
		if (this.group !== "eBook") {
			return this.name;
		}
		else {
			var filetype = this.file.split(".");
			filetype = filetype[filetype.length-1];
			filetype = filetype.split("?")[0];
			return filetype.toUpperCase();
		}
	}
}

export default class Publication {
	@observable id = "";
	@observable title = "";
	@observable author = "";
	@observable description = "";
	@observable picture = "";
	@observable resources = [];
	constructor(data) {
		this.id = data.friendly_id;
		this.title = data.title;
		this.author = data.author;
		this.description = data.description;
		this.picture = data.picture_medium;
		this.resources = data.resources? data.resources.map(resource => new Resource(resource)) : [];
	}
	@computed get resourceGroups() {
		let groups = [];
		let groupHash = {};
		for (let resource of this.resources) {
			if (!groupHash[resource.group]) {
				groupHash[resource.group] = true;
				groups.push(resource.group);
			}
		}
		return groups;
	}
	getResourceGroup(group) {
		return this.resources.filter(resource=>resource.group === group);
	}
}
