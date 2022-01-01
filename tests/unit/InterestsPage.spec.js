import { shallowMount, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";

import InterestsPage from "@/components/registerPages/InterestsPage";

describe("Interests page Test", () => {
  let wrapper;
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
    Vue.use(Vuetify);
    Vue.use(Vuex);
  });

  wrapper = shallowMount(InterestsPage, {
    vuetify,
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

  it("Counter is incremented/decremented when selecting/diselecting a card", () => {
    const cardSelected = jest.fn();
    wrapper.setMethods({
      cardSelected: cardSelected,
    });

    expect(wrapper.vm.counter).toBe(0);
    wrapper.find('.cardsStyle').trigger('click');
    expect(cardSelected).toHaveBeenCalled();
    expect(wrapper.vm.counter).toBe(1);
    
  });
});
