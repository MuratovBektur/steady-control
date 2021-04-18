<template>
  <div class="v-tree-test">
    <a-tree
      class="draggable-tree"
      :default-expanded-keys="expandedKeys"
      draggable
      :tree-data="citizens"
    >
      <template slot="test" slot-scope="item">
        <div v-if="item.isCity">
          <a-tooltip placement="bottom" :title="item.title">
            <span>{{ item.name }}</span>
          </a-tooltip>
        </div>

        <span v-else>{{ item.name }}</span>
      </template>
    </a-tree>
  </div>
</template>

<script>
const filterByProps = (citizens, props, cities) => {
  let newList = [];
  let cityInfo = {};

  citizens.forEach((citizen) => {
    const name = citizen.groups
      .find((group) => group.type === props[0])
      .name.split(" ")[0];
    const idx = newList.findIndex((item) => item.name === name);

    if (props[0] === "city" && !cityInfo[name]) {
      const cityCount = cities.find((city) => city.name === name).data;
      cityInfo[name] = `${name}, ${cityCount} жителей`;
    }
    if (idx === -1) {
      newList.push({
        name,
        title: props[0] === "city" ? cityInfo[name] : name,
        isCity: props[0] === "city",
        scopedSlots: { title: "test" },
        key: name + Date.now(),
        children: [citizen],
      });
    } else {
      newList[idx].children.push(citizen);
    }
  });
  props = props.slice(1);

  newList.forEach((item, idx) => {
    if (props.length > 0) {
      newList[idx].children = filterByProps(item.children, props);
    } else {
      newList[idx].children = newList[idx].children.map((child) => ({
        name: child.name,
        key: child.name + Date.now(),
      }));
    }
    delete newList[idx].groups;
  });
  return newList;
};

const transformData = (citizens, cities) => {
  const groupHierarchy = ["city", "district", "street"];

  return filterByProps(citizens, groupHierarchy, cities);
};

export default {
  data() {
    return {
      citizens: [],
      cities: [],
      expandedKeys: ["0-0", "0-0-0", "0-0-0-0"],
    };
  },
  async mounted() {
    try {
      this.fetchCities();
      this.fetchCitizens();
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    async fetchCitizens() {
      try {
        let response = await fetch("http://localhost:5000/api/citizen/all");
        if (response.ok) {
          response = await response.json();
          this.citizens = transformData(response, this.cities);
        } else {
          console.error(`error: ${response.status} - ${response.statusText}`);
        }
      } catch (e) {
        console.error(e);
      }
    },
    async fetchCities() {
      try {
        let response = await fetch("http://localhost:5000/api/city/all");
        if (response.ok) {
          this.cities = await response.json();
        } else {
          console.error(`error: ${response.status} - ${response.statusText}`);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style>
.v-tree-test {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}
</style>
