<template>
	<div>
		<l-text :value="`Hello, ${username}`" />
	</div>
</template>

<script>
import store from "../store/store";

export default {
	name: "Welcome",
	computed: {
		username: function () {
			return this.$store.state.main.username || "Unknown";
		},
	},
	mounted: function () {
		store.dispatch("main/fetch_username");
	},
};
</script>