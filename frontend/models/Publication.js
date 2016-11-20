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

const videoExtensions = ["mp4", "flv", "mkv", "mpg"];
const eBookExtensions = ["pdf", "epub", "txt", "md", "latex"];
const audioExtensions = ["mp3", "ogg", "aac", "m4a", "wav"];

export default class Publication {
	@observable id = "";
	@observable title = "";
	@observable author = "";
	@observable body = "";
	@observable picture = "";
	@observable resources = [];
	@observable order = [];
	constructor(data) {
		this.id = data.friendly_id;
		this.title = data.title;
		this.author = data.author;
		this.picture = data.picture_medium;
		this.resources = data.resources? data.resources.map(resource => new Resource(resource)) : [];
		this.body = data.body;
	}
	inferGroupType(group) {
		const items = this.resources.filter(resource=>resource.group === group);
		if (!items.length) {
			return "unknown";
		}
		const extension = items[0].file.split(".").pop().split("?")[0];
		if (videoExtensions.indexOf(extension)>=0) {
			return "video";
		}
		else if (audioExtensions.indexOf(extension)>=0) {
			return "audio";
		}
		else if (eBookExtensions.indexOf(extension)>=0) {
			return "ebook";
		}
		return "unknown";
	}
	getResourceGroup(group) {
		return this.resources.filter(resource=>resource.group === group);
	}
}
