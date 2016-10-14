import {observable, computed} from "mobx";

class Resource {
	@observable id = "";
	@observable name = "";
	@observable description = "";
	@observable group = "";
	@observable file = "";
	@observable uiPlayerOpen = false;
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
	@observable order = [];
	constructor(data) {
		this.id = data.friendly_id;
		this.title = data.title;
		this.author = data.author;
		this.description = data.description;
		this.picture = data.picture_medium;
		this.resources = data.resources? data.resources.map(resource => new Resource(resource)) : [];
		if (data.order && data.order.length) {
			this.order = data.order;
		}
		else {
			this.order = ["Videos", "Audio Book", "eBook", "Interviews"];
		}
	}
	@computed get resourceGroups() {
		// First pick groups to follow order, then add unspecified groups
		let groups = [];
		let groupHash = {};
		for (let i of this.order) {
			for (let resource of this.resources) {
				if (i === resource.group) {
					groups.push(i);
					groupHash[i] = true;
					break;
				}
			}
		}
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
