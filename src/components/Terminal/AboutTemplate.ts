const aboutTemplate = () => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `Hello, My Name is <span class="text-tahiti">Aysha</span>.<br /> I am a <span class="text-tahiti">Programmer</span> &  <span class="text-tahiti">front end</span> developer. I am always trying to build unique web applications. Also care about writing reusable & clean code. Interested in learning something new based on technology or going very deep into a topic.`;
  return parentDiv;
};
export default aboutTemplate;
