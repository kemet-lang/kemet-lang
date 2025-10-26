/**
 * prism-kemet.js
 * Production-ready Prism syntax highlighting for the Kemet programming language.
 * Based on Kemet's VSCode grammar.
 *
 * Developed with ❤️ by Maysara & Kéti.
 */

(function (Prism) {
  if (typeof Prism === 'undefined') return;

  Prism.languages.kemet = {
    // Comments with TODO/FIXME highlighting
    comment: [
      {
        pattern: /\/\/\/[!/]?.*/,
        alias: 'doc-comment',
        inside: {
          todo: {
            pattern: /\b(TODO|FIXME|XXX|NOTE|HACK|BUG)\b:?/,
            alias: 'important',
          },
        },
      },
      {
        pattern: /\/\/[!/]?.*/,
        greedy: true,
        inside: {
          todo: {
            pattern: /\b(TODO|FIXME|XXX|NOTE|HACK|BUG)\b:?/,
            alias: 'important',
          },
        },
      },
    ],

    // Strings with escape sequences
    string: [
      {
        pattern: /"(?:[^"\\]|\\(?:[nrt'"\\]|x[0-9a-fA-F]{2}|u\{[0-9a-fA-F]+\}))*"/,
        greedy: true,
        inside: {
          escape: {
            pattern: /\\(?:[nrt'"\\]|x[0-9a-fA-F]{2}|u\{[0-9a-fA-F]+\})/,
            alias: 'constant',
          },
          invalid: {
            pattern: /\\./,
            alias: 'error',
          },
        },
      },
      {
        pattern: /'(?:[^'\\]|\\(?:[nrt'"\\]|x[0-9a-fA-F]{2}|u\{[0-9a-fA-F]+\}))*'/,
        greedy: true,
        inside: {
          escape: {
            pattern: /\\(?:[nrt'"\\]|x[0-9a-fA-F]{2}|u\{[0-9a-fA-F]+\})/,
            alias: 'constant',
          },
          invalid: {
            pattern: /\\./,
            alias: 'error',
          },
        },
      },
    ],

    // Keywords organized by category
    'keyword-control-conditional': {
      pattern: /\b(?:if|else|match|default)\b/,
      alias: 'keyword',
    },

    'keyword-control-repeat': {
      pattern: /\b(?:for|while|do)\b/,
      alias: 'keyword',
    },

    'keyword-control-flow': {
      pattern: /\b(?:return|break|continue|defer|throw)\b/,
      alias: 'keyword',
    },

    'keyword-control-trycatch': {
      pattern: /\b(?:try|catch)\b/,
      alias: 'keyword',
    },

    'keyword-control-import': {
      pattern: /\b(?:use|from|as)\b/,
      alias: 'keyword',
    },

    'storage-modifier': {
      pattern: /\b(?:pub|static|inline|mut|comptime)\b/,
      alias: 'keyword',
    },

    'storage-type': {
      pattern: /\b(?:let|def|fn)\b/,
      alias: 'keyword',
    },

    'keyword-operator-word': {
      pattern: /\b(?:and|or|new|typeof|sizeof)\b/,
      alias: 'keyword',
    },

    'keyword-test': {
      pattern: /\btest\b/,
      alias: 'keyword',
    },

    // Type keywords
    'type-structure': {
      pattern: /\b(?:struct|enum|errset)\b/,
      alias: 'keyword',
    },

    // Built-in types
    'builtin-type': {
      pattern: /\b(?:type|char|cpoint|slice|err|void|bool|any|cint|cflt|null_t|und_t|i8|i16|i32|i64|i128|i256|isize|u8|u16|u32|u64|u128|u256|usize|f16|f32|f64|f80|f128)\b/,
      alias: 'class-name',
    },

    // Sized types (dynamic)
    'sized-type': {
      pattern: /\b[iuf]\d+\b/,
      alias: 'class-name',
    },

    // Function declarations
    'function-declaration': {
      pattern: /\b(?:pub\s+)?(?:static\s+)?(?:comptime\s+)?(?:inline\s+)?fn\s+([_a-zA-Z][_a-zA-Z0-9]*)\s*(?=\()/,
      inside: {
        'storage-modifier': /\b(?:pub|static|comptime|inline)\b/,
        keyword: /\bfn\b/,
        function: /[_a-zA-Z][_a-zA-Z0-9]*/,
      },
    },

    // Function types
    'function-type': {
      pattern: /\bfn\s*(?=\()/,
      alias: 'keyword',
    },

    // Built-in functions (@ prefix)
    builtin: {
      pattern: /@[_a-zA-Z][_a-zA-Z0-9]*/,
      alias: 'function',
    },

    // Special variables
    'variable-language': {
      pattern: /\b(?:self|selferr|true|false|@i)\b/,
      alias: 'keyword',
    },

    // Boolean constants
    boolean: {
      pattern: /\b(?:true|false)\b/,
    },

    // Null constants
    'constant-null': {
      pattern: /\b(?:null|und|true|false)\b/,
      alias: 'keyword',
    },

    // Numbers
    number: [
      {
        pattern: /\b\d+\.\d+[eE][+-]?\d+\b/,
        alias: 'number',
      },
      {
        pattern: /\b\d+\.\d+\b/,
        alias: 'number',
      },
      {
        pattern: /\b0x[0-9a-fA-F]+\b/,
        alias: 'number',
      },
      {
        pattern: /\b0o[0-7]+\b/,
        alias: 'number',
      },
      {
        pattern: /\b0b[01]+\b/,
        alias: 'number',
      },
      {
        pattern: /\b\d+\b/,
        alias: 'number',
      },
    ],

    // Operators
    operator: [
      {
        pattern: /\+=|-=|\*=|\/=|%=/,
        alias: 'operator',
      },
      {
        pattern: /(?<![<>!])=(?!=)/,
        alias: 'operator',
      },
      {
        pattern: /==|!=|<=|>=|<(?!<)|>(?!>)/,
        alias: 'operator',
      },
      {
        pattern: /\+\+|--|\.\*|\*\*|\+|(?<!->)-|\*|\/|%/,
        alias: 'operator',
      },
      {
        pattern: /<<|>>|&(?!&)|\|(?!\|)|\^|~/,
        alias: 'operator',
      },
      {
        pattern: /!(?!=)/,
        alias: 'operator',
      },
      {
        pattern: /\.\.=|\.\./,
        alias: 'operator',
      },
      {
        pattern: /\?\?/,
        alias: 'operator',
      },
      {
        pattern: /\?(?!\?)/,
        alias: 'operator',
      },
      {
        pattern: /->/,
        alias: 'operator',
      },
      {
        pattern: /\./,
        alias: 'operator',
      },
    ],

    // Function calls
    function: {
      pattern: /[_a-zA-Z][_a-zA-Z0-9]*\s*(?=\()/,
      alias: 'function',
    },

    // Punctuation
    punctuation: /[{}()\[\],:;]/,

    // Variables (catch-all)
    variable: /\b[_a-zA-Z][_a-zA-Z0-9]*\b/,
  };

  // Aliases
  Prism.languages.k = Prism.languages.kemet;
})(Prism);