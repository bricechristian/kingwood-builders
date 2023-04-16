import global from "./global";
import blockContent from "./blockContent";
import project from "./project";
import page from "./page";
import menu from "./menu";
import menuItem from "./menuItem";

import { heroType, textHeadlineType, projectCarouselType } from "./pageBuilder";

export const schemaTypes = [
	page,
	project,
	blockContent,
	heroType,
	textHeadlineType,
	projectCarouselType,
	menu,
	menuItem,
	global,
];
