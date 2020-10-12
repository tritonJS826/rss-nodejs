const boards = {
  boards: [
    {
      id: '1board',
      title: 'border 1',
      columns: [
        {
          id: '1Columnof1Table',
          title: 'column 1',
          order: '1',
          tasks: [
            {
              id: '1task1column1board',
              title: '1task',
              order: '1',
              discription: 'good task!',
              userId: 'user1'
            },
            {
              id: '2task1column1board',
              title: '2task',
              order: '0',
              discription: 'super good 2 task!',
              userId: 'user5'
            }
          ]
        },
        {
          id: '2Columnof1Table',
          title: 'column 2',
          order: '0',
          tasks: [
            {
              id: '1task12column1board',
              title: '1task',
              order: '1',
              discription: 'good task!',
              userId: 'user1'
            }
          ]
        },
        {
          id: '3Columnof1Table',
          title: 'column 3',
          order: '2',
          tasks: [
            {
              id: '1task3column1board',
              title: '1task',
              order: '1',
              discription: 'good task!',
              userId: 'user1'
            },
            {
              id: '2task3column1board',
              title: '2task',
              order: '0',
              discription: 'super good 2 task!',
              userId: 'user5'
            }
          ]
        }
      ]
    },
    {
      id: '2board',
      title: 'board 2',
      columns: [
        {
          id: '1Columnof2Table',
          title: 'column 1',
          order: '0',
          tasks: [
            {
              id: '1task1column2board',
              title: '1task',
              order: '1',
              discription: 'good task!',
              userId: 'user1'
            },
            {
              id: '2task1column2board',
              title: '2task',
              order: '0',
              discription: 'super good 2 task!',
              userId: 'user5'
            }
          ]
        },
        {
          id: '2Columnof2Table',
          title: 'column 2',
          order: '1',
          tasks: [
            {
              id: '1task2column2board',
              title: '1task',
              order: '1',
              discription: 'good task!',
              userId: 'user1'
            },
            {
              id: '2task2column2board',
              title: '2task',
              order: '0',
              discription: 'super good 2 task!',
              userId: 'user2'
            }
          ]
        },
        {
          id: '3Columnof2Table',
          title: 'column 3',
          order: '2',
          tasks: [
            {
              id: '1task3column2board',
              title: '1task',
              order: '1',
              discription: 'good task!',
              userId: 'user1'
            },
            {
              id: '2task3column2board',
              title: '2task',
              order: '0',
              discription: 'super good 2 task!',
              userId: 'user5'
            }
          ]
        }
      ]
    }
  ]
};

module.exports = boards;
