<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/ArifDev99/Talkr/tree/main">
    <img src="https://github.com/ArifDev99/Talkr/blob/main/chat-app/src/assets/logo2.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Talkr - Messaging Application</h3>

  <p align="center">
    An awesome chat application based on website
    <br />
    <a href="https://github.com/ArifDev99/Talkr.git"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://talkr-frontend.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/ArifDev99/Talkr/issues">Report Bug</a>
    ·
    <a href="https://github.com/ArifDev99/Talkr/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

**Talkr - Messaging Application** is a web application that allows their user to communicate with each other. This application has realtime messageing feature, search people by their name, add friend to group, rename group, and other cool features as well, of course with the support of complete authentication flow.

<p align="right"><a href="#top">back to top</a></p>

### Built With

Main technology used to built this application are listed below:

* [React.js](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [MongoDB](https://mongodb.com/cloud/atlas/)
* [Node.js](https://nodejs.org/)
* [socket.io](https://socket.io/)

<p align="right"><a href="#top">back to top</a></p>

## Getting Started

To get started with this project locally, follow below steps:

### Prerequisites

Make sure you have package manager (either npm or yarn)

>**FYI**: This project uses **npm** as package manager, but you're free to use **yarn** too.

* Install Yarn (Only for user who want to use **yarn**)
  ```
  npm i -g yarn
  ```

### Installation

Below steps will guide you through the local installation process of this application
1. Get your MongoDB cloud connection at [here](https://mongodb.com/cloud/atlas/)
2. Clone the repo
   ```
   git clone https://github.com/ArifDev99/Talkr.git
   ```
3. Install project dependency<br />
Make sure that your terminal pointing at the root directory of this project (chat-app folder).
   ```
    cd chat-app && npm i && cd server && npm i
   ```
4. Complete the .env variable<br/>
Rename .env.example file at ```server/config``` directory become ```.env```, then fill the value for every key. Below is the guideline for filling the .env value:<br/>
    | Key | What To Fill | Example Value |
    | :---: | :---: | :---: |
    | PORT | Your server port | 5000 |
    | CLIENT_URL | Your client side URL | http://localhost:3000 |
    | MONGO_URL | Your MongoDB URL | mongodb://user:user1234@main-shardxxxx |
    | ACCESS_TOKEN_SECRET | Random complex string for JWT | DUhxdx183)_--aACN#2%
    | REFRESH_TOKEN_SECRET | Random complex string for JWT | 17hdjcD7ud(-*&732~
5. Lastly, run below command at your terminal to spin off the application. <br/>
   Make sure that your terminal pointing at the root directory of this project (chat-app folder).
    ```
    cd chat-app && npm run dev && cd server && npm run dev
    ```

<p align="right"><a href="#top">back to top</a></p>

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right"><a href="#top">back to top</a></p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right"><a href="#top">back to top</a></p>

## Contact

LinkedIn: [Arif Rahaman](https://www.linkedin.com/in/arif11896/)

<p align="right"><a href="#top">back to top</a></p>

## Acknowledgments

Special thanks to:

* [Piyush Agarwal (Roadside Coder)](https://github.com/piyush-eon/mern-chat-app) for providing such good content on youtube.
* [React Icons](https://react-icons.github.io/react-icons/) for providing icon to be used in this application.
* [Tailwind CSS](https://tailwindcss.com/) for providing CSS framework to be used in this application.
* [Vercel](https://vercel.com/) for providing hosting service for this application.

<p align="right"><a href="#top">back to top</a></p>
