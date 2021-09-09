import { longestPalindrome } from './solution.optimal';

interface CustomTest {
    input: string,
    output: Array<string>
};

describe('Problem 5, Longest Palindromic Substring',
    () => {

        const runTest = (test: CustomTest) => {
            it(test.input, () => {
                const result = longestPalindrome(test.input);
                expect({ result: test.output.some(res => res == result), actual: result }).toEqual({ result: true, actual: result });
            })
        };

        describe('Example problems', () => {
            const examples: Array<CustomTest> = [
                { input: 'babad', output: ['bab', 'aba'] },
                { input: 'cbbd', output: ['bb'] },
                { input: 'a', output: ['a'] },
                { input: 'ac', output: ['a'] }
            ];

            examples.forEach(runTest);
        });

        describe('Custom problems', () => {
            const examples: Array<CustomTest> = [
                { input: '', output: [''] },
                { input: '12321', output: ['12321'] },
                { input: 'aaaabbbb', output: ['aaaa', 'bbbb'] },
                { input: 'giraffarig', output: ['giraffarig'] },
                { input: 'arara', output: ['arara'] },
                { input: 'abacadaeafa', output: ['aba', 'aca', 'ada', 'aea', 'afa'] },
                { input: 'pizza', output: ['zz'] },
                { input: 'example', output: ['e', 'x', 'a', 'm', 'p', 'l', 'e'] },
                {
                    input: 'qkajbumzdzkiplmbcpnhbzweoevrvbptpozhtrfntszvnwbdahvkykmezrwruhvvslngruvwqebudtfxgpbmwefczwrecpqjegxkqknpobzkemmtruidulnxgntjxcmxtwmlxhzmbqfqylwvzjyojhfawwuupiipvxjiyxkqvsxbhgzzegfkdihizvjoxzrmeorikzsdyphbujaqmykrfblneqmwwxsoonzsgvligqxrrumspylfvquklbanjhkudlprwoycpxdsueokruoofyubirbhbyfuvgllijywuqmkcsfjttbnmelrylivkefllepgxnoeummujbaoyvryukyoumvuxezegpwgmwsupjuaarvbtbfmisrifjadqjypmzipvjysgakvjhfeaqwpsqijvqibshctuabwqqsjwotjopahoaptmxkwerkjkmwiodgblhtnhykzjuaoluoyokroxuvqtkpggfanzabgjejdfsgybhxbscubdpufywbxgutheskuhixasnksoayjngvhfoxxclykfobrwxjwgefarzczvptlfrgrtrjcemaeihpukhbeoezgvrwxgyhpkkfvmfvquwtswkdwqqgrgasopladdnteulqofmjhewpghkibbrewnhdllfppctgkfkoedoiwqocnpvfviochrokrgrzthrvyhqfsrzyyvqwkhuzsrkfaympcdodkwaojnghzytkhf', output: ['piip']
                },
                {
                    input: 'wsgdzojcrxtfqcfkhhcuxxnbwtxzkkeunmpdsqfvgfjhusholnwrhmzexhfqppatkexuzdllrbaxygmovqwfvmmbvuuctcwxhrmepxmnxlxdkyzfsqypuroxdczuilbjypnirljxfgpuhhgusflhalorkcvqfknnkqyprxlwmakqszsdqnfovptsgbppvejvukbxaybccxzeqcjhmnexlaafmycwopxntuisxcitxdbarsicvwrvjmxsapmhbbnuivzhkgcrshokkioagwidhmfzjwwywastecjsolxmhfnmgommkoimiwlgwxxdsxhuwwjhpxxgmeuzhdzmuqhmhnfwwokgvwsznfcoxbferdonrexzanpymxtfojodcfydedlxmxeffhwjeegqnagoqlwwdctbqnuxngrgovrjesrkjrfjawknbrsfywljscfvnjhczhyeoyzrtbkvvfvofykkwoiclgxyaddhpdoztdhcbauaagjmfzkkdqexkczfsztckdlujgqzjyuittnudpldjvsbwbzcsazjpxrwfafievenvuetzcxynnmskoytgznvqdlkhaowjtetveahpjguiowkiuvikwewmgxhgfjuzkgrkqhmxxavbriftadtogmhlatczusxkktcsyrnwjbeshifzbykqibghmmvecwwtwdcscikyzyiqlgwzycptlxiwfaigyhrlgtjocvajcnqyenxrnjgogeqtvkxllxpuoxargzgcsfwavwbnktchwjebvwwhfghqkcjhuhuqwcdsixrkfjxuzvhjxlyoxswdlwfytgbtqbeimzzogzrlovcdpseoafuxfmrhdswwictsctawjanvoafvzqanvhaohgndbsxlzuymvfflyswnkvpsvqezekeidadatsymbvgwobdrixisknqpehddjrsntkqpsfxictqbnedjmsveurvrtvpvzbengdijkfcogpcrvwyf', output: ['knnk']
                }
            ];

            examples.forEach(runTest);
        })
    }
)