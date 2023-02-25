# React Template for use with CodeKit

This is my super-slim setup for trying out React, using [CodeKit][CK] for
compiling the source files (i.e. JSX, Kit, Less etc.).

Ideally, it should be possible to get this running (provided you have CodeKit
installed) by doing this:

1. Create a new repository from this template
2. Clone the new repository down
3. Drag the folder onto CodeKit
4. Tell CodeKit to install from the supplied `package.json`

## Sample Component

It contains the default `App` component and a sample `TermsList` so it's easy
to test if everything works after install.

## TODOs

A list of things I don't have in place yet:

- [ ] Figure out how I want to handle CSS (Less/Styled Components/... ?)
- [x] Configuration for [Nova][]


## Acknowledgements

This was inspired by a couple of things:

1. I use CodeKit for everything else
2. I really don't like fiddling with npm, babel, webpack etc.
3. A blogpost called [“Don't use create-react-app: How you can set up your own reactjs boilerplate.”][POST]



[POST]: https://dev.to/nikhilkumaran/don-t-use-create-react-app-how-you-can-set-up-your-own-reactjs-boilerplate-43l0
[Nova]: https://nova.app
[CK]: https://codekitapp.com
