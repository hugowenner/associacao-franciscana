import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

/**
 * Lê e processa um arquivo Markdown
 * Retorna o conteúdo HTML e os metadados do frontmatter
 */
export async function getMarkdownContent(filename: string) {
  const fullPath = path.join(contentDirectory, filename)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Usa gray-matter para extrair frontmatter e conteúdo
  const matterResult = matter(fileContents)

  // Converte markdown para HTML usando remark
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content)
  
  const contentHtml = processedContent.toString()

  return {
    contentHtml,
    data: matterResult.data,
  }
}

/**
 * Verifica se um arquivo Markdown existe
 */
export function markdownFileExists(filename: string): boolean {
  const fullPath = path.join(contentDirectory, filename)
  return fs.existsSync(fullPath)
}
