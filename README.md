<div align=center>
<img src='https://xesque.rocketseat.dev/platform/tech/javascript.svg' width='36px' title='JavaScript'/> 
<img src='https://xesque.rocketseat.dev/platform/tech/typescript.svg' width='36px' title='TypeScript'/>
</div>

<div align=center>
<img src='https://img.shields.io/github/last-commit/ruggeryiury/use-default-options?color=%23DDD&style=for-the-badge' /> <img src='https://img.shields.io/github/repo-size/ruggeryiury/use-default-options?style=for-the-badge' /> <img src='https://img.shields.io/github/issues/ruggeryiury/use-default-options?style=for-the-badge' /> <img src='https://img.shields.io/github/package-json/v/ruggeryiury/use-default-options?style=for-the-badge' /> <img src='https://img.shields.io/github/license/ruggeryiury/use-default-options?style=for-the-badge' />
</div>

- [About](#about)

# About

**_Use Default Options_** is a utility function to create default options for any function while merging with user-defined options that can be received as argument. The idea is to always set default values for any function that has an "option" parameter, totally avoiding `undefined` values to be evaluated. See the example below:

```ts
import useDefaultOptions from 'use-default-options'

// This is the interface with all the options
// that can be settled to our function.
// On this one, you can have optional values
// to use on the function argument
interface ReturnOptsFunctionOptions {
  option1?: string
  // Null values are accepted to act as a neutral value!
  option2?: string | null
}

function returnOpts(options?: ReturnOptsFunctionOptions) {
  // Call "useDefaultOptions()" to make all values required,
  // since we're setting default values for each one of them,
  // then place the "options" parameter as second argument
  // of the function to merge.

  // Remeber to put your options type as type parameter.
  const opts = useDefaultOptions<ReturnOptsFunctionOptions>(
    // Default values
    {
      option1: 'example',
      option2: null,
    },

    // Merge with the user-provided options object.
    options
  )

  // Return the new object to test.
  return opts
}

// Let's test the function!
const opts = returnOpts({ options2: 'example2' })
console.log(opts.option1) // 'example'
console.log(opts.option2) // 'example2'
```
