# TSFilterLikeLINQ
Use TypeScript like LINQ

Use TypeScript como as consultas LINQ de .NET

### Exemplos

Lista de pessoas

```
    let listaPessoa = new List(Pessoa);

    let pessoa = new Pessoa();

    pessoa.setNome('Tesla');
    pessoa.setIdade(20);

    listaPessoa.Add(pessoa);

    pessoa = new Pessoa();

    pessoa.setNome('Ramanujan');
    pessoa.setIdade(21);

    listaPessoa.Add(pessoa);

    let pessoaEncontrada = listaPessoa.FirstOrDefault(x => x.getNome() === 'Ramanujan');

    alert(pessoaEncontrada.getIdade());
```

## Veja os exemplos em aplicações

* [Exemplo Angular](https://github.com/HitaloDeAraujo/TSFilterLikeLINQ/tree/master/Example/ListApp) - Aplicação com SPA Angular










