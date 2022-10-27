const stubFileExtensions = ["css", "svg"];
const transformStubRegex = `^.+\\.(${stubFileExtensions.join("|")})$`;

export default {
	testEnvironment: "jsdom",
	preset: "ts-jest",
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
	moduleNameMapper: {
		"@/(.*)": "<rootDir>/src/$1",
	},
	transform: {
		[transformStubRegex]: "jest-transform-stub",
	},
};
