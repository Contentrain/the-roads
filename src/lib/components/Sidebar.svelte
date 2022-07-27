<script>
// @ts-nocheck
import { sidebarStatus, activeMap } from "$lib/stores";
  let sidebarData = $activeMap;
  activeMap.subscribe((value) => {
    sidebarData = value;
  });
  let show = true;
  sidebarStatus.subscribe((value) => {
    show = value;
  });
  const changeSidebarStatus = () => {
    sidebarStatus.set(!show);
  };
</script>

{#if show}
  <div
    class="drop-shadow-2xl lg:drop-shadow-none bg-slate-50 p-9 lg:col-span-3 fixed right-0 z-50 w-[85%] lg:w-[33.33%] h-full overflow-y-scroll"
  >
    <div class="float-right">
      <button on:click={changeSidebarStatus}
        ><i class="ri-close-fill" /></button
      >
    </div>
    <div>
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
            <span class="ml-1 text-slate-500"> {sidebarData.type} </span>
          </div>
        </div>
        <div class="grid grid-cols-12 w-full mt-4">
          <div class="text-slate-500 col-span-6">Date:</div>
          <div
            class="col-span-6 justify-self-start bg-slate-200 text-slate-700 text-sm rounded-md text-center border-solid border border-slate-300	px-2 py-1"
          >
            {sidebarData.date}
          </div>
        </div>
      </div>
      <div class="mt-10">
        <!-- <div
          class="w-10 h-10 rounded-full bg-sky-500 text-white flex justify-center items-center text-xl"
        >
          <i class={sidebarData.icon} />
        </div> -->
        <h1 class="text-xl text-slate-700 font-semibold mt-4">
          {sidebarData.title}
        </h1>
        <p class="mt-2 text-slate-500 text-sm">
          {@html sidebarData.content.html}
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
            class="rounded-full w-12 h-12 border-2 border-white	"
            src={sidebarData.author.image}
            alt={sidebarData.author.name}
          />
          <div class="ml-4">
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
{/if}
