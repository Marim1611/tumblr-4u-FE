import { shallowMount, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import VueRouter from "vue-router";

import InterestsPage from "@/components/registerPages/InterestsPage";

describe("Interests page Test", () => {
  let wrapper;
  let vuetify;
  let router;

  beforeEach(() => {
    router = new VueRouter();

    vuetify = new Vuetify();
    Vue.use(Vuetify);
    Vue.use(Vuex);
  });

  wrapper = shallowMount(InterestsPage, {
    vuetify,
    router,
    methods: {
      cardSelected: jest.fn(),
      itemRemoveSelection: jest.fn(),
      doneSelection: jest.fn(),
    },
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("Counter is incremented/decremented when selecting/diselecting a card", async () => {
    // const cardSelected = jest.fn();
    // wrapper.setMethods({
    //   cardSelected: cardSelected,
    // });

    // expect(wrapper.vm.counter).toBe(0);
    // let button = wrapper.get(".cardsStyle");
    // const text = wrapper.findComponent(".counterInfo");

    // // expect(text.text()).toContain("5");
    // // button.trigger("click");
    // await wrapper.vm.$nextTick();

    // // button.$on("click");

    // expect(cardSelected).toHaveBeenCalled();
    // expect(text.text()).toContain("4");

    let button = wrapper.find("button");
    await button.trigger("click");
    // await wrapper.vm.$nextTick();
    expect(wrapper.vm.$router.currentRoute.fullPath).toBe("/home");
  });
});
