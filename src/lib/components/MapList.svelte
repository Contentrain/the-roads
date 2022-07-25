<script>
  // @ts-nocheck
  import RoadmapCard from "$lib/components/RoadmapCard.svelte";

  import {
    allMaps,
    activeMap,
    sidebarStatus,
    activeYear,
    years,
  } from "../../lib/stores";
  import { onMount } from "svelte";
  let cards = {};
  let selected = "";
  allMaps.subscribe((value) => {
    value.forEach((x) => {
      const date = x.date.replace(/(\d+[/])(\d+[/])/, "$2$1");
      if (!Array.isArray(cards[new Date(date).getFullYear()])) {
        cards[new Date(date).getFullYear()] = [];
      }
      cards[new Date(date).getFullYear()].push(x);
    });
  });
  activeYear.set($years[0]);
  const changeSidebarData = (event) => {
    const map = $allMaps.find((map) => map.ID === event.detail);
    activeMap.set(map);
    sidebarStatus.set(true);
  };
  const updateActiveYear = (e) => {
    const value = e.target.value;
    window.location.hash = value;
    selected = value;
  };
  activeYear.subscribe((value) => {
    selected = value;
  });
  onMount(() => {
    const mapCards = document.querySelectorAll(".map-card");
    document.addEventListener("scroll", (e) => {
      mapCards.forEach((x) => {
        const rect = x.getBoundingClientRect();
        if (rect.top > 0 && rect.top < 150) {
          const location = window.location.toString().split('#')[0];
          history.replaceState(null, null, location + '#' + x.getAttribute('hash'));
          selected = x.getAttribute('hash');
          activeYear.set(selected);
        }
      });
    });
  });
</script>

<div class="w-full flex items-center justify-center relative h-[8rem]">
  <div
    class="absolute  w-px h-full transform -translate-x-1/2 bg-slate-200 left-1/2"
  />
  <div
    class="w-8 h-8 z-40 bg-green-50 rounded-full left-1/2 sm:translate-y-0 flex items-center justify-center"
  >
    <div class="w-4 h-4 bg-green-500 rounded-full left-1/2 sm:translate-y-0" />
  </div>
  <select
    value={selected}
    on:change={updateActiveYear}
    class="absolute right-[0px] border-2 border-slate-200 rounded-md p-2 bg-slate-100 z-50 hidden lg:block"
  >
    {#each $years as year}
      <option value={year}>{year}</option>
    {/each}
  </select>
</div>
<div class="w-full">
  <div class="relative min-h-screen">
    <!-- Vertical middle line-->
    <div
      class="absolute w-px h-full transform -translate-x-1/2 bg-slate-200  left-1/2"
    />
    <div class="space-y-12 lg:space-y-8 flex flex-col">
      {#each $years as year, index}
        {#each cards[year] as item, i}
          {#if (i + index) % 2 === 0}
            <!-- Left section -->
            <div
              id={i === 0 ? year : year + "_" + i}
              hash={year}
              class="flex flex-col items-center lg:w-1/2 lg:self-start map-card"
            >
              <div
                class="flex items-center justify-start w-full mx-auto after:bg-slate-200 after:w-1/4 after:h-[2px] after:lg:block after:hidden"
              >
                <div
                  class="flex lg:flex-row flex-col items-center relative w-full lg:w-3/4"
                >
                  <RoadmapCard
                    title={item.title}
                    content={item.description}
                    date={item.date}
                    icon={item.icon}
                    id={item.ID}
                    on:ID={changeSidebarData}
                  />
                  <div
                    class="w-[16px] absolute h-[16px] bg-yellow-50 rounded-full lg:right-[-8px] lg:top-[47%] top-[-8px] flex items-center justify-center"
                  >
                    <div class="w-[8px] h-[8px] bg-yellow-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          {:else}
            <!-- Right section -->
            <div
              id={i === 0 ? year : year + "_" + i}
              hash={year}
              class="flex flex-col items-center lg:w-1/2 lg:self-end map-card"
            >
              <div
                class="flex items-center justify-start w-full mx-auto before:bg-slate-200 before:w-1/4 before:h-[2px] before:lg:block before:hidden"
              >
                <div
                  class="flex lg:flex-row flex-col items-center relative w-full lg:w-3/4"
                >
                  <RoadmapCard
                    title={item.title}
                    content={item.description}
                    date={item.date}
                    icon={item.icon}
                    id={item.ID}
                    on:ID={changeSidebarData}
                  />
                  <div
                    class="w-[16px] absolute h-[16px] bg-yellow-50 rounded-full lg:left-[-8px] lg:top-[47%] top-[-8px] flex items-center justify-center"
                  >
                    <div class="w-[8px] h-[8px] bg-yellow-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          {/if}
        {/each}
      {/each}
    </div>
  </div>
</div>
