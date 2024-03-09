# REALTIME CHAT APPLICATION

This project is a simple messaging application that enables users to communicate with each other in real-time. Users can send and receive instant messages by connecting to a server-side application, which is typically hosted on their own localhost (unless deployed elsewhere). The application is developed using socket programming to facilitate easy communication between users. Its primary goal is to facilitate real-time message exchange between users. The frontend is built using Tailwind CSS and React, while the backend utilizes Express.js and Socket.io.

# PROJECT MATERIALS

**FRONTEND** -> [@React](https://reactjs.org/) and [@Tailwind](https://tailwindcss.com/)

**BACKEND** -> [@Express.js](https://expressjs.com/) and [@Socket.io](https://socket.io/docs/v4/client-installation/)

**ICONS** -> [@React-icons](https://www.npmjs.com/package/react-icons)

# PROJECT DETAILS

In the project files, there are two folders named Client and Server. The Server folder contains the backend code of the project, while the Client folder contains the frontend code. In the frontend section, there are two components: one for the login page and the other for the chat page. Since I use form variables obtained from the user in multiple components, I defined them globally and used context for this purpose. Additionally, I installed the 'socket.io-client' library and established a connection because I will use socket programming. To accommodate this on the backend side, I downloaded the 'socket.io' library and configured it accordingly. After setting up the necessary configurations, I determined the relevant URL parts for both frontend and backend to communicate with each other. Since my projects are running on my localhost, one of them operates on port 5173 and the other on port 3000. Therefore, establishing the connection was not difficult.

In the frontend section, on my login page, I request the user to provide a username and a roomId. The purpose of this is to ensure that users connecting via socket join the same room, enabling them to communicate over the same socket. After receiving this information, I store it in global state values and then send it to the backend. On the backend side, this information and the socket connection are listened to using the 'socket.on' function, and the necessary responses are returned

# How is the received response directed to the user on the other end ?

Of course, a connection is established using the roomId received from the frontend section, and on the backend side, the 'socket.to()

In summary, this is a simple and brief overview of the project...
