import {Router} from 'express';
import {deleteUser, getUsers, signIn, signUp} from "../../controllers/postgres/user.controller";

export const userRoutes = Router();


/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of the user
 *        name:
 *          type: string
 *          description: the name of the user
 *        email:
 *          type: string
 *          description: the description of the user
 *        password:
 *          type: string
 *          description: the password of the user
 *      required:
 *        - email
 *        - password
 *      example:
 *        id: 1
 *        name: Manu
 *        email: manu@prisma.io
 *        password: 12345678
 *
 *    Playlist:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         description: the auto-generated id of the playlist
 *       name:
 *         type: string
 *         description: the name of the playlist
 *
 *    UserWithPlaylists:
 *      type: object
 *      properties:
 *         msg:
 *           type: string
 *           description: the success message
 *         data:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: the auto-generated id of the user
 *               name:
 *                 type: string
 *                 description: the name of the user
 *               email:
 *                 type: string
 *                 description: the email of the user
 *               playlists:
 *                 type: array
 *                 description: the playlists of the user
 *                 items:
 *                     $ref: '#/components/schemas/Playlist'
 *
 *    Count:
 *      type: object
 *      properties:
 *          count:
 *              type: integer
 *
 *  parameters:
 *      userId:
 *          in: path
 *          name: userId
 *          required: true
 *          schema:
 *              type: string
 *          description: the user id
 *
 *  UserNotFound:
 *    type: object
 *    properties:
 *      msg:
 *          type: string
 *          description: the error message
 *      example:
 *          msg: User not found
 *
 *  MessageSuccess:
 *      type: String
 *      properties:
 *          msg:
 *              type: string
 *              description: the success message
 *          example:
 *              msg: User Fetched Successfully
 */

/**
 * @swagger
 * tags:
 *  name: User
 *  description: User Routes
 */

/**
 * @swagger
 * /user/signin:
 *  post:
 *   summary: Sign In
 *   tags: [User]
 *   requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *
 *   responses:
 *      '200':
 *          description: A successful response message
 *          content:
 *              application/json:
 *                  type: object
 *                  properties:
 *                      msg:string
 *      500:
 *          description: Internal Server Error
 *
 */
userRoutes.post("/signin", signIn)

/**
 * @swagger
 * /user/signup:
 *  post:
 *   summary: Sign Up
 *   tags: [User]
 *   requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/User'
 *
 *   responses:
 *      200:
 *          description: A successful response message
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      400:
 *          description: Bad Request
 *      409:
 *          description: User already exists
 *      500:
 *          description: Internal Server Error
 *
 */
userRoutes.post("/signup", signUp)
/**
 * @swagger
 * /user/:
 *  get:
 *   summary: Get List of Users
 *   tags: [User]
 *   responses:
 *      200:
 *          description: Users fetched successfully
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/UserWithPlaylists'
 *      500:
 *          description: Internal Server Error
 *
 */
userRoutes.get("/", getUsers)

/**
 * @swagger
 * /user/{userId}:
 *  delete:
 *   summary: Delete a User
 *   tags: [User]
 *   parameters:
 *      - $ref: '#/components/parameters/userId'
 *   responses:
 *      200:
 *          description: Users Deleted Successfully
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          msg:
 *                              type: string
 *                              description: Success message
 *                          data:
 *                              type: array
 *                              items:
 *                                  oneOf:
 *                                      - $ref: '#/components/schemas/Count'
 *                                      - $ref: '#/components/schemas/User'
 *      500:
 *          description: Internal Server Error
 *
 */
userRoutes.delete("/:userId", deleteUser)



