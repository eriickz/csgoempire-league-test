<template>
  <header class="h-[60px] px-10 bg-header mb-[60px]">
    <div class="flex h-full justify-between items-center">
      <router-link to="/">
        <img class="w-[110px]" src="images/logo.svg" />
      </router-link>
      <nav class="flex gap-x-10 text-white font-medium">
        <router-link class="flex gap-x-2" to="/schedule">
          <img class="h-[25px]" src="images/schedule.png" alt="Schedule Page">
          <p>Schedule</p>
        </router-link>
        <router-link class="flex gap-x-2" to="/leaderboard">
          <img class="h-[25px]" src="images/leaderboard.png" alt="Leaderboard Page">
          <p>Leaderboard</p>
        </router-link>
      </nav>
    </div> 
  </header>
</template>
