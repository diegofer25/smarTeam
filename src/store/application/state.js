const userData = JSON.parse(localStorage.getItem('user'))

export default {

  isMini: true,

  user: {
    id: userData ? userData.uid : '',
    name: userData ? userData.displayName : '',
    email: userData ? userData.email : '',
    photo: userData ? userData.photo : ''
  },

  configs: {
    theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'primary'
  },

  dataChart: {
    labels: ['Concluidas', 'Pendentes', 'Em andamento'],
    datasets: [{
      label: 'Status Tarefa',
      backgroundColor: [
        'rgba(0, 128, 0, 0.5)',
        'rgba(255, 0, 0, 0.5)',
        'rgba(0, 0, 255, 0.5)'
      ],
      data: [
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1
      ]
    }]
  },
  chartOptions: {
    responsive: true,
    title: {
      display: true,
      text: 'Status Tarefa',
      fontSize: 22
    },
    legend: {
      display: true,
      position: 'bottom'
    },
    animation: {
      duration: 2000
    }
  },

  table: {
    columns: [
      { name: 'name', required: true, label: 'Pessoa', align: 'left', field: 'name' },
      { name: 'doed', required: true, label: 'Feito', align: 'left', field: 'doed' },
      { name: 'doing', required: true, label: 'Fazendo', align: 'left', field: 'doing' },
      { name: 'todo', required: true, label: 'A fazer', align: 'left', field: 'todo' },
      { name: 'total', required: true, label: 'Total', align: 'left', field: 'total' }
    ],
    tableData: [
      { name: 'Fulano', doed: 5, doing: 4, todo: 3, total: 0 },
      { name: 'Ciclano', doed: 4, doing: 3, todo: 3, total: 0 },
      { name: 'Beltrano', doed: 3, doing: 1, todo: 3, total: 0 },
      { name: 'Xico', doed: 2, doing: 1, todo: 3, total: 0 },
      { name: 'Jorge', doed: 1, doing: 3, todo: 3, total: 0 },
      { name: 'Diego', doed: 5, doing: 4, todo: 3, total: 0 },
      { name: 'Isaias', doed: 4, doing: 3, todo: 3, total: 0 },
      { name: 'Tobias', doed: 3, doing: 1, todo: 3, total: 0 },
      { name: 'Eber', doed: 2, doing: 1, todo: 3, total: 0 },
      { name: 'Marcell', doed: 1, doing: 3, todo: 3, total: 0 }
    ]
  }
}
