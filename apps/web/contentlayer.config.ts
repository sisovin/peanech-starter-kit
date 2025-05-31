import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        date: {
            type: 'date',
            required: true,
        },
        description: {
            type: 'string',
            required: false,
        },
        image: {
            type: 'string',
            required: false,
        },
        author: {
            type: 'string',
            required: false,
        },
        tags: {
            type: 'list',
            of: { type: 'string' },
            required: false,
        },
        published: {
            type: 'boolean',
            default: true,
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/blog/${post._raw.flattenedPath}`,
        }, slug: {
            type: 'string',
            resolve: (post) => post._raw.flattenedPath,
        },
        readingTime: {
            type: 'number',
            resolve: (post) => {
                // Simple reading time calculation: ~200 words per minute
                const wordsPerMinute = 200;
                const textLength = post.body.raw.split(/\s+/).length;
                return Math.ceil(textLength / wordsPerMinute);
            },
        },
    },
}))

export default makeSource({
    contentDirPath: './content',
    documentTypes: [Post],
    disableImportAliasWarning: true,
})
