<script>
import { createEventDispatcher } from "svelte";


  export let title = '';
  export let content = '';
  export let date = '';
  export let icon = ''
  export let id = '';
  const dispatch = createEventDispatcher();

  const dispatchID = () => {
    dispatch('ID', id);
  }
  const cardClasses = {
    container: "w-full border-solid border border-slate-200 rounded-2xl p-8 bg-white",
    badge: "w-[36px] h-[36px] bg-sky-50 rounded-full text-sky-500 flex items-center justify-center",
    title: "font-semibold mt-4 text-slate-700 text-xl",
    content: "text-slate-500 text-[14px] mt-4 ellipsis-2",
};
</script>
    <div class={cardClasses.container}>
      <div class={cardClasses.badge}>
      <i class={icon}></i>
      </div>
      <h3 class={cardClasses.title}>{title}</h3>
      <p class={cardClasses.content}>
      {content}
      </p>
      <div class="flex justify-between mt-6">
        <div class="bg-slate-200 text-slate-700 text-sm rounded-md text-center border-solid border border-slate-300	px-2 py-1">
              {date}
        </div>
          <button on:click={dispatchID} class="text-sky-500 text-[14px] flex align-center">
            <span>
              See More
            </span>
            <i class="ri-arrow-right-up-line"></i>
          </button>
      </div>
    </div>
