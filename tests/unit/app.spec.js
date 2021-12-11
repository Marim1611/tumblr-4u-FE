//import Spinner from "@/ui/Spinner";
import Home from "../../src/components/registerPages/WelcomPage";
import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";

describe("Age Component Unit test", () => {
  let component;

  beforeEach(() => {
    component = shallowMount(Home);
  });

  it("should render Spinner on mount", () => {
    expect(component.find(Spinner).exists()).to.be.true;
  });

  //--------------------------------------------------
    //              Test Rendering
    //--------------------------------------------------
    /*it("renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
 
    it("renders a vue instance", () => {
      expect(wrapper.isVueInstance()).toBe(true);
    });*/
});
