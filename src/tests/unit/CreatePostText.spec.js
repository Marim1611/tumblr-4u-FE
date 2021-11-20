import { shallowMount, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";

//import the required componets
import CreatePost from "../../components/HomeCreatePost/HomeCreatePostSection";
import CreatePostText from "../../components/HomeCreatePost/HomeCreatePostText";
import CreatePostTextEditor from "../../components/HomeCreatePost/HomeCreatePostTextEditor";
import CreatePostImage from "../../components/HomeCreatePost/HomeCreatePostImage";
import CreatePostUploadImage from "../../components/HomeCreatePost/HomeCreatePostUploadImage";

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

  it("Has Upload image component", () => {
    expect(wrapper.findComponent(CreatePostUploadImage));
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

// ------------------------- Text editor test ------------------

describe("Create Post Text Editor Test", () => {
  let wrapper;
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
    Vue.use(Vuetify);
    Vue.use(Vuex);
  });

  wrapper = mount(CreatePostTextEditor, {
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

// ------------------------- uploading imgs test ------------------

describe("Uploading image Test", () => {
  let wrapper;
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
    Vue.use(Vuetify);
    Vue.use(Vuex);
  });

  wrapper = shallowMount(CreatePostUploadImage, {
    vuetify,
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
