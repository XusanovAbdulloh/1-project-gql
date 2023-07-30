const { readFileSync } = require("fs");
const { join } = require("path");
const listrooms= require("./list-rooms");
const showRoom = require("./show-room");
const addRoom = require("./add-room");
const editRoom = require("./edit-room");
const removeRoom = require("./delete-room");

const typeDefs = readFileSync(
    join(process.cwd(), 'src', 'graphql', 'schema.gql'),
    'utf8'
);

const resolvers = {
    Query: {
      rooms: (_, args) => {
        return listrooms({...args.input});
      },
      room: (_, args) => {
        return showRoom({ id: args.id });
      },
    },
    Mutation: {
        createRoom: async (_, args)=>{
            return  await addRoom(args.input)
        },
        updateRoom: async (_, args)=>{
            return  await editRoom({ id: args.id, ...args.input })
        },
        removeRoom: async (_, args)=>{
            return  await removeRoom({ id: args.id })
        }
    }
}

module.exports= {typeDefs, resolvers}