<script setup>

import useProjectsStore from '../stores/projectsStore.js'
import ProjectItem from '../components/ProjectItem.vue'

  import ProjItem from '../ProjItem.vue'

import { computed } from 'vue'

const projectsStore = useProjectsStore();
  
const projects = computed(() => {
  return projectsStore.stateProjects;
});
  
</script>

<template>
  <div>
		<div class="flex flex-col items-center">
			<h3 class="text-xl">#02. Projects</h3>
			<h4>Some of the projects I\'ve built</h4>
			<ul class="w-full">
        <ProjectItem class="mx-auto" v-for="project in projects"
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