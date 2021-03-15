<style lang="less">
@import "../style/theme.less";

.Welcome-wrapper {
	width: 100vw;
	height: 100vh;
}

.Username {
	color: @info-040;
}

.Button-wrapper {
	margin-top: 60px;
}
</style>

<template>
	<div class="Welcome-wrapper VLayout align-center flow-center">
		<div class="VLayout align-center">
			<l-text value="Welcome to Sharkquila UI!" size="xxxlarge" />
			<l-text class="Username" :value="username" size="xlarge" color="" />
		</div>

		<div class="VLayout Button-wrapper">
			<l-button
				value="Explore more"
				btnStyle="Success"
				size="xlarge"
				@click="goGithub"
			/>
		</div>
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
	methods: {
		goGithub: function (event) {
			const url = "https://github.com/enw860/sharkquila_ui_demo";
			window.location.href = url;
		},
	},
	mounted: function () {
		store.dispatch("main/fetch_username");
	},
};
</script>