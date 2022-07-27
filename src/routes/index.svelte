<script context="module">
  export const load = async ({ fetch }) => {
    const roads = await fetch("/api/roads.json");
    const allRoads = await roads.json();
    allMaps.set(allRoads);
    activeMap.set(allRoads[0]);
    let arr = [];
    allRoads.forEach((x) => {
      const date = x.date.replace(/(\d+[/])(\d+[/])/, "$2$1");
      arr.push(String(new Date(date).getFullYear()));
      arr = [...new Set(arr)].sort((a, b) => b - a);
      years.set(arr);
    });
    const data = await fetch("/api/header.json");
    headerData.set(await data.json());
    return {
      props: {
        roads: allRoads,
      },
    };
  };
</script>

<script>
  // @ts-nocheck

  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import MapList from "$lib/components/MapList.svelte";
  import {
    sidebarStatus,
    activeMap,
    allMaps,
    years,
    headerData,
  } from "$lib/stores.js";
  import Sidebar from "$lib/components/Sidebar.svelte";
  let sidebar = true;
  sidebarStatus.subscribe((value) => {
    sidebar = value;
  });
</script>

<div class="w-full grid grid-cols-12">
  <div
    class:lg:col-span-12={!sidebar}
    class:lg:col-span-8={sidebar}
    class="col-span-12 border-r border-slate-200"
  >
    <Header />
    <div class="w-full flex">
      <div class="flex-1 container mx-auto px-10">
        <MapList />
      </div>
    </div>
  </div>
  <Sidebar />
</div>
