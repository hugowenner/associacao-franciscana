import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const noticiasDirectory = path.join(process.cwd(), 'content/noticias')

export interface Noticia {
  slug: string
  title: string
  date: string
  resumo: string
  contentHtml?: string
}

/**
 * Obtém todas as notícias disponíveis
 * Ordena por data (mais recentes primeiro)
 */
export function getAllNoticias(): Noticia[] {
  // Verifica se o diretório existe
  if (!fs.existsSync(noticiasDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(noticiasDirectory)
  
  const allNoticias = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" para obter o slug
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(noticiasDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title || 'Sem título',
        date: matterResult.data.date || '',
        resumo: matterResult.data.resumo || '',
      }
    })

  // Ordena por data (mais recente primeiro)
  return allNoticias.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

/**
 * Obtém o conteúdo completo de uma notícia específica
 */
export async function getNoticiaBySlug(slug: string): Promise<Noticia | null> {
  try {
    const fullPath = path.join(noticiasDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    // Converte markdown para HTML
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(matterResult.content)
    
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: matterResult.data.title || 'Sem título',
      date: matterResult.data.date || '',
      resumo: matterResult.data.resumo || '',
      contentHtml,
    }
  } catch (error) {
    console.error(`Erro ao carregar notícia ${slug}:`, error)
    return null
  }
}

/**
 * Retorna todos os slugs de notícias para geração estática
 */
export function getAllNoticiasSlugs() {
  if (!fs.existsSync(noticiasDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(noticiasDirectory)
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => ({
      slug: fileName.replace(/\.md$/, ''),
    }))
}
