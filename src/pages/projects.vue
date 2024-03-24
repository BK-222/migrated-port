<script setup>

import useProjectsStore from '../stores/projectsStore.js'
import ProjectItem from '../components/ProjectItem.vue'

  import ProjItem from '../ProjItem.vue'

import { reactive, computed } from 'vue'

const projectsStore = useProjectsStore();
  
const projects = computed(() => {
  return projectsStore.stateProjects;
});

  

  const compProjects = reactive([
  {
  id: 1,
  title: 'Simple playable battle app.',
  link: 'https://priceless-edison-9dd932.netlify.app/',
  gitHub: 'https://github.com/BK-222/tms',
  tech: 'Vue'
  },
  {
  id: 2, 
  title: 'Talking bot', 
  link: 'https://github.com/BK-222/discord-bot',
  gitHub: 'https://github.com/BK-222/discord-bot',
  tech: 'Node.js'
  }] 
)                             




  
</script>

<template>
  <div>
		<div class="flex flex-col items-center">
			<h3 class="text-xl">#02. Projects</h3>
			<h4>Some of the projects I've built</h4>
			<ul class="w-full">
        <ProjItem class="mx-auto" v-for="project in compProjects"
          :key="project.id"
          :title="project.title"
          
          :link="project.link"
          :gitHub="project.gitHub"
          :tech="project.tech"
				/>
			</ul>
    </div>
	</div>
</template>