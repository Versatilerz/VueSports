<template>
  <div class="container">
    <h2>Sports</h2>
    <table>
      <tr>
        <th>Sport</th>
        <th>#Members</th>
        <th>GoToMembers</th>
        <th>Edit sport</th>
        <th>Delete sport</th>
      </tr>
      <tr>
        <td>Tennis</td>
        <td>45</td>
        <td>LINK</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 60vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
