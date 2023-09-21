import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BlogPage from "../BlogPage.vue";

describe("BlogPage", () => {
  it("should renders the title correctly", () => {
    const wrapper = mount(BlogPage);

    const title = wrapper.get('[data-test="title"]');

    expect(title.text()).toContain("Blog Page")
  });
  it("should renders the description correctly", () => {
    const wrapper = mount(BlogPage);

    const description = wrapper.get('[data-test="description"]');

    expect(description.text()).toContain("This is the Blog Page")
  });
});
