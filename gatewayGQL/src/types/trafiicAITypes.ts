const typeDefTrafficAI = `
  type HelloReply {
    message: String
  }

  type ImageReply {
    message: String
  }

  type VideoReply {
    message: String
  }

  type Mutation {
    sayHello(name: String): HelloReply
    predictImage(image: String): ImageReply
    predictVideo(video: String): VideoReply
  }
`;

export default typeDefTrafficAI;