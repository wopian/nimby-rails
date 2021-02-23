import { snakeCase } from 'snake-case'

export const slugify = slug => snakeCase(slug.toLowerCase())