// CSS
import "./styles/bulue.css";

// General
import Button from "./components/Button.vue";
import Notification from "./components/Notification.vue";
import ProgressBar from "./components/ProgressBar.vue";

// Forms
import Field from "./components/Field.vue";
import Input from "./components/Input.vue";
import Select from "./components/Select.vue";
import Checkbox from "./components/Checkbox.vue";

export default {
	install(app) {
		app.component("b-button", Button);
		app.component("b-notification", Notification);
		app.component("b-progress-bar", ProgressBar);

		app.component("b-field", Field);
		app.component("b-input", Input);
		app.component("b-select", Select);
		app.component("b-checkbox", Checkbox);
	},
};
