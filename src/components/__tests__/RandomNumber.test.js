import { mount } from "@vue/test-utils";
import RandomNumber from "@/components/RandomNumber.vue";
import { describe, expect, it, test } from "vitest";

describe("RandomNumber.vue", () => {
  it("Should generate a random number between given props", () => {
    const max = 10;
    const min = 1;
    const wrapper = mount(RandomNumber, {
      props: {
        minValue: min,
        maxValue: max,
      },
    });
    console.log(max);
    console.log(min);

    expect(wrapper.vm.randomNumber < max).toBe(true);
    expect(wrapper.vm.randomNumber > min).toBe(true);
  });
});
