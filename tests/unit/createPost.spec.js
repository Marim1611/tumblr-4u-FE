import { shallowMount, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";

//import the required componets
import CreatePost from "@/components/createPost/CreatePostSection";
import CreatePostText from "@/components/createPost/CreatePostText";
import CreatePostImage from "@/components/createPost/CreatePostImage";

// ------------------------- Create post section test ------------------
describe("Create Post Section Test", () => {
  let wrapper;
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
    Vue.use(Vuetify);
    Vue.use(Vuex);
  });

  wrapper = shallowMount(CreatePost, {
    vuetify,
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("Has Create text component", () => {
    expect(wrapper.findComponent(CreatePostText));
  });

 
});

// ------------------------- Create post text test ------------------

describe("Create Post Text Test", () => {
  let wrapper;
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
    Vue.use(Vuetify);
    Vue.use(Vuex);
  });

  wrapper = shallowMount(CreatePostText, {
    vuetify,
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});



// ------------------------- Create post image test ------------------

describe("Create Post Image Test", () => {
  let wrapper;
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
    Vue.use(Vuetify);
    Vue.use(Vuex);
  });

  wrapper = shallowMount(CreatePostImage, {
    vuetify,
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
