import Injector from "lib/Injector";
import CharacterCounter from "../components/CharacterCounter";

export default () => {
	Injector.transform("character-count-transform", updater => {
		updater.component("TextField", CharacterCounter);
	});
};
