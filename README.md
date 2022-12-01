# unit-testing-vue-3

My code and notes following along the unit testing for vue 3 tutorial on VueMastery
I will try to follow along using the newer Vitest and Composition API instead of Jest/Options API. As I like to use 'improved' tools :)

## What to test ?

In short: Components.

Components are the 'units' of a Vue app, we test the building blocks to make sure we can build the house without faulty bricks!

### Component contract

What is this component's purpose ? What responsibility does it have towards the rest of the codebase ?
For example:

```html
<script setup>
  import { computed } from "vue";
  const props = defineProps({
    maxValue: Number,
    minValue: Number,
  });
  const randomNumber = computed(() => {
    console.log(props.maxValue);
    console.log(props.minValue);
    const max = Math.floor(props.maxValue);
    const min = Math.ceil(props.minValue);
    const rand = Math.floor(Math.random() * (max - min) + min);
    return rand;
  });
</script>
<template>
  <h3>Random number between {{ props.minValue }} and {{ props.maxValue }}</h3>
  <p>Your random number is: {{ randomNumber }}</p>
</template>
```

So the contract says:

- I expect two props => Input => We test
- I use those props to generate a random number between them => Calculation => We don't test
- I will display all three numbers => Output => We test

So in short, we test **inputs** and **outputs**
|inputs|outputs|
|---|---|
|Component Data|What is rendered to the Dom ?|
|Props|Calls to external functions|
|User interaction|Emitted events|
|Pinia|Updates to Pinia Store|
|LifeCycle Methods|Changes in Child Components|
|Route Params||

### What not to test ?

- Implementation details.
  - The logic within the code, we test the input and the output!
- Frameworks
  - We can trust that the framework we are using (Vue3) is thoroughly tested.
- External Packages
  - We use these to make our life easier, and should not test them ourselves.
    - Tough the data we may compute/receive by using these packages will of course determine the output of our code

---
