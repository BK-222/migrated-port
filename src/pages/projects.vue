<script setup>

import useProjectsStore from '../stores/projectsStore.js'
import ProjectItem from '../components/ProjectItem.vue'

  import ProjItem from '../ProjItem.vue'

import { reactive, computed } from 'vue'

const projectsStore = useProjectsStore();
  
const projects = computed(() => {
  return projectsStore.stateProjects;
})

  
const compProjects = reactive([
    {
      id: 1,
      title: 'Simple playable battle app.',
      img_1: 'src/assets/_img/slayer_1.png',
      img_2: 'src/assets/_img/slayer_2.png',
      img_3: 'src/assets/_img/slayer_3.png',
      link: 'https://priceless-edison-9dd932.netlify.app/',
      gitHub: 'https://github.com/BK-222/tms',
      tech: 'Vue'
    },
    {
      id: 2,
      title: 'Discord bot',
      img_1: 'src/assets/_img/beato_1.png',
      img_2: 'src/assets/_img/beato_2.png',
      img_3: 'src/assets/_img/beato_3.png',
      link: 'https://github.com/BK-222/discord-bot',
      gitHub: 'https://github.com/BK-222/discord-bot',
      tech: 'Node.js'
    },
    {
      id: 3,
      title: 'Landing page',
      img_1: 'src/assets/_img/landing_1.png',
      img_2: 'src/assets/_img/landing_2.png',
      img_3: 'src/assets/_img/landing_3.png',
      link: 'https://bk-222.github.io/animeet/',
      gitHub: 'https://github.com/BK-222/animeet',
      tech: 'Plain HTML/CSS with .js scroller'
    },
    {
      id: 4,
      title: 'A Small Register/Book Practice Project',
      img_1: 'src/assets/_img/prac_1.png',
      img_2: 'src/assets/_img/prac_2.png',
      img_3: 'src/assets/_img/prac_3.png',
      link: 'https://github.com/BK-222/akiba-place', 
      gitHub: 'https://github.com/BK-222/akiba-place',
      tech: 'MEVN'
   } 
]);
      
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
          :img_1="project.img_1"
          :img_2="project.img_2"
          :img_3="project.img_3"
          :link="project.link"
          :gitHub="project.gitHub"
          :tech="project.tech"
				/>
			</ul>
    </div>
	</div>
</template>