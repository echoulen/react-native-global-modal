import "react-native";
import * as React from "react";
// Note: test renderer must be required after react-native.
import * as renderer from "react-test-renderer";
import {App} from "../App";
import {GlobalModal} from "../components/GlobalModal";

it("renders App with GlobalModal correctly", () => {
  renderer.create(
    <App />,
  );
});

it("renders GlobalModal correctly", () => {
    renderer.create(
        <GlobalModal />,
    );
});
