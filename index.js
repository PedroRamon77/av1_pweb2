// Classe base Material
class Material {
    constructor(id, titulo, autor, dataPublicacao, categoria) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
        this.categoria = categoria;
    }

    exibirInformacoes() {
        console.log(`ID: ${this.id}`);
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Data de Publicação: ${this.dataPublicacao}`);
        console.log(`Categoria: ${this.categoria}`);
    }
}

// Classe ObraLiteraria herda de Material
class ObraLiteraria extends Material {
    constructor(id, titulo, autor, dataPublicacao, categoria, editora, anoEdicao) {
        super(id, titulo, autor, dataPublicacao, categoria);
        this.editora = editora;
        this.anoEdicao = anoEdicao;
    }

    exibirDetalhes() {
        this.exibirInformacoes();
        console.log(`Editora: ${this.editora}`);
        console.log(`Ano de Edição: ${this.anoEdicao}`);
    }
}

// Classe Periodico herda de Material
class Periodico extends Material {
    constructor(id, titulo, autor, dataPublicacao, categoria, edicao, artigos = []) {
        super(id, titulo, autor, dataPublicacao, categoria);
        this.edicao = edicao;
        this.artigos = artigos;
    }

    exibirArtigos() {
        this.exibirInformacoes();
        console.log(`Edição: ${this.edicao}`);
        console.log('Artigos:');
        this.artigos.forEach((artigo, index) => {
            console.log(`${index + 1}. ${artigo.titulo}`);
        });
    }
}

// Classe Artigo herda de Material
class Artigo extends Material {
    constructor(id, titulo, autor, dataPublicacao, categoria, fonte, localizacao) {
        super(id, titulo, autor, dataPublicacao, categoria);
        this.fonte = fonte;
        this.localizacao = localizacao;
    }

    exibirFonte() {
        this.exibirInformacoes();
        console.log(`Fonte: ${this.fonte}`);
        console.log(`Localização: ${this.localizacao}`);
    }
}

// Classe TrabalhoAcademico herda de Material
class TrabalhoAcademico extends Material {
    constructor(id, titulo, autor, dataPublicacao, categoria, instituicao, orientador) {
        super(id, titulo, autor, dataPublicacao, categoria);
        this.instituicao = instituicao;
        this.orientador = orientador;
    }

    exibirOrientador() {
        this.exibirInformacoes();
        console.log(`Instituição: ${this.instituicao}`);
        console.log(`Orientador: ${this.orientador}`);
    }
}

// Exemplo de uso
const obra = new ObraLiteraria(1, 'Dom Casmurro', 'Machado de Assis', '1899', 'Literário', 'Editora X', 1899);
const artigo1 = new Artigo(2, 'O Impacto da Tecnologia', 'João Silva', '2024', 'Acadêmico', 'Revista ABC', 'Página 30');
const periodico = new Periodico(3, 'Revista Ciência', 'Maria Oliveira', '2023', 'Periódico', 15, [artigo1]);
const trabalho = new TrabalhoAcademico(4, 'Estudo sobre IA', 'Ana Souza', '2024', 'Acadêmico', 'Universidade Y', 'Dr. Carlos');

obra.exibirDetalhes();
artigo1.exibirFonte();
periodico.exibirArtigos();
trabalho.exibirOrientador();
