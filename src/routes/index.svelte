<script context="module">
  export const load = async ({ fetch }) => {
    const roads = await fetch("/api/roads.json");
    const allRoads = await roads.json();
    allMaps.set(allRoads);
    activeMap.set(allRoads[0]);
    let arr = []
    allRoads.forEach((x) => {
      const date = x.date.replace(/(\d+[/])(\d+[/])/, "$2$1");
      arr.push(String(new Date(date).getFullYear()));
      arr = [...new Set(arr)].sort((a, b) => b - a);
      years.set(arr)
    })
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
  import { sidebarStatus, activeMap, allMaps, years } from "$lib/stores.js";
  let sidebar = true;
  let sidebarData = {};

  const changeSidebarStatus = () => {
    sidebarStatus.set(!sidebar);
  };
  sidebarStatus.subscribe((value) => {
    sidebar = value;
  });
  activeMap.subscribe((value) => {
    sidebarData = value;
  });
</script>

<div class="w-full grid grid-cols-12">
  <div
    class={!sidebar
      ? "lg:col-span-12 col-span-12 border-r border-slate-200"
      : "lg:col-span-9 col-span-12 border-r border-slate-200"}
  >
    <Header />
    <div class="w-full flex">
      <div class="flex-1 container mx-auto px-[48px]">
        <MapList />
      </div>
    </div>
  </div>
  <div
    class={sidebar === true
      ? "drop-shadow-2xl lg:drop-shadow-none bg-slate-50 p-4 lg:col-span-3 fixed right-0 z-50 w-[85%] lg:w-[25%] h-full overflow-y-scroll"
      : "hidden"}
  >
    <div class="float-right">
      <button on:click={changeSidebarStatus}><i class="ri-close-fill" /></button
      >
    </div>
    <div class="mt-20">
      <div class="grid grid-cols-12 w-full">
        <div class="text-slate-500 col-span-6">Status:</div>
        {#if sidebarData.progress}
          <div
            class="bg-yellow-100 justify-self-start	text-yellow-500 text-sm rounded-md text-center col-span-6 px-2 py-1"
          >
            {sidebarData.status}
          </div>
          {:else}
          <div
          class="bg-green-100 justify-self-start	text-green-500 text-sm rounded-md text-center col-span-6 px-2 py-1"
        >
          {sidebarData.status}
        </div>
        {/if}
      </div>
      <div class="grid grid-cols-12 w-full mt-4">
        <div class="text-slate-500 col-span-6">Type:</div>
        <div class="flex items-center col-span-6 justify-self-start">
          <span class="w-2 h-2 rounded-full bg-green-500	" />
          <span class="ml-1 text-slate-500"> Feature </span>
        </div>
      </div>
      <div class="grid grid-cols-12 w-full mt-4">
        <div class="text-slate-500 col-span-6">Date:</div>
        <div
          class="lg:col-span-6 justify-self-start bg-slate-200 text-slate-700 text-sm rounded-md text-center border-solid border border-slate-300	px-2 py-1"
        >
          {sidebarData.date}
        </div>
      </div>
    </div>
    <div class="mt-12">
      <div
        class="w-10 h-10 rounded-full bg-sky-500 text-white flex justify-center items-center text-xl"
      >
        <i class={sidebarData.icon} />
      </div>
      <h1 class="text-lg text-slate-700 font-semibold mt-4">
        {sidebarData.title}
      </h1>
      <p class="mt-4 text-slate-500 text-sm">
        {sidebarData.content}
      </p>
      <ul class="list-none mt-8">
        {#each sidebarData.list as item}
          <li class="flex items-start mt-4">
            {#if item.check}
              <div class="text-green-500 text-green-500 text-xl">
                <i class="ri-checkbox-circle-fill" />
              </div>
            {:else}
            <div class="text-yellow-500 text-xl">
              <i class="ri-time-fill" />
            </div>
            {/if}
            <p class="text-slate-500 ml-1">
              {item.content}
            </p>
          </li>
        {/each}
      </ul>
      <div class="mt-8">
        <img
          class="w-full"
          src={sidebarData.coverUrl.split("static")[1]}
          alt="banner"
        />
      </div>
      <div class="mt-8 flex">
        <img
          class="rounded-full w-12 h-12"
          src={sidebarData.author.image.split("static")[1]}
          alt={sidebarData.author.name}
        />
        <div class="ml-1">
          <p>
            {sidebarData.author.name}
          </p>
          <p class="text-sm text-slate-500">
            {sidebarData.author.title}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
