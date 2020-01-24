import React, { useState } from 'react';
import './App.css';
 
import Form from './Components/Form';
import Team from './Components/Team';
 
function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: 'Zaija',
      role: 'Nomad',
      email: 'Zaija@gmail.com'
    },
    {
      id: 2,
      name: 'Mama Bear',
      role: 'everything',
      email: 'mama@gmail.com'
    },
    {
      id: 3,
      name: 'Sphinx',
      role: 'Performer',
      email: 'B@gmail.com'
    },
    {
      id: 4,
      name: 'Raizo',
      role: 'Ninja',
      email: 'David@gmail.com'
    },
    {
      id: 5,
      name: 'Captain',
      role: 'Captain',
      email: 'Captain@gmail.com'
    }
  ]);
 
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      role: member.role,
      email: member.email 
    };
    setTeam([...team, newMember]);
  };
 
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addNewMember={addNewMember} />
      <Team team={team} />
    </div>
  );
}
 
export default App;


// Previously tracked Git
// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~
// $ cd team-builder

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (master)
// $ git checkout -b elisabeth-earley
// Switched to a new branch 'elisabeth-earley'

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ ^C

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git status
// On branch elisabeth-earley
// Changes not staged for commit:
//   (use "git add <file>..." to update what will be committed)
//   (use "git restore <file>..." to discard changes in working directory)
//         modified:   README.md

// Untracked files:
//   (use "git add <file>..." to include in what will be committed)
//         .gitignore
//         README.old.md
//         package.json
//         public/
//         src/
//         yarn.lock

// no changes added to commit (use "git add" and/or "git commit -a")

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git status
// On branch elisabeth-earley
// Changes not staged for commit:
//   (use "git add <file>..." to update what will be committed)
//   (use "git restore <file>..." to discard changes in working directory)
//         modified:   README.md

// Untracked files:
//   (use "git add <file>..." to include in what will be committed)
//         .gitignore
//         README.old.md
//         package.json
//         public/
//         src/
//         yarn.lock

// no changes added to commit (use "git add" and/or "git commit -a")

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git add .
// warning: LF will be replaced by CRLF in README.md.
// The file will have its original line endings in your working directory
// warning: LF will be replaced by CRLF in .gitignore.
// The file will have its original line endings in your working directory
// warning: LF will be replaced by CRLF in package.json.
// The file will have its original line endings in your working directory
// warning: LF will be replaced by CRLF in public/index.html.
// The file will have its original line endings in your working directory
// warning: LF will be replaced by CRLF in public/manifest.json.
// The file will have its original line endings in your working directory
// warning: LF will be replaced by CRLF in public/robots.txt.
// The file will have its original line endings in your working directory
// warning: LF will be replaced by CRLF in src/App.css.
// The file will have its original line endings in your working directory
// warning: LF will be replaced by CRLF in src/App.js.
// The file will have its original line endings in your working directory
// warning: LF will be replaced by CRLF in src/App.test.js.
// The file will have its original line endings in your working directory
// warning: LF will be replaced by CRLF in src/index.css.
// The file will have its original line endings in your working directory
// warning: LF will be replaced by CRLF in src/index.js.
// The file will have its original line endings in your working directory
// warning: LF will be replaced by CRLF in src/logo.svg.
// The file will have its original line endings in your working directory
// warning: LF will be replaced by CRLF in src/serviceWorker.js.
// The file will have its original line endings in your working directory
// warning: LF will be replaced by CRLF in src/setupTests.js.
// The file will have its original line endings in your working directory
// warning: LF will be replaced by CRLF in yarn.lock.
// The file will have its original line endings in your working directory

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git commit -m "added useState to App.js, created state variable, created Form.js with input"
// [elisabeth-earley c59cf25] added useState to App.js, created state variable, created Form.js with input
//  20 files changed, 11196 insertions(+), 99 deletions(-)
//  create mode 100644 .gitignore
//  rewrite README.md (99%)
//  copy README.md => README.old.md (100%)
//  create mode 100644 package.json
//  create mode 100644 public/favicon.ico
//  create mode 100644 public/index.html
//  create mode 100644 public/logo192.png
//  create mode 100644 public/logo512.png
//  create mode 100644 public/manifest.json
//  create mode 100644 public/robots.txt
//  create mode 100644 src/App.css
//  create mode 100644 src/App.js
//  create mode 100644 src/App.test.js
//  create mode 100644 src/Form.js
//  create mode 100644 src/index.css
//  create mode 100644 src/index.js
//  create mode 100644 src/logo.svg
//  create mode 100644 src/serviceWorker.js
//  create mode 100644 src/setupTests.js
//  create mode 100644 yarn.lock

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git push -u origin elisabeth-earley
// Enumerating objects: 25, done.
// Counting objects: 100% (25/25), done.
// Delta compression using up to 4 threads
// Compressing objects: 100% (23/23), done.
// Writing objects: 100% (23/23), 198.09 KiB | 3.47 MiB/s, done.
// Total 23 (delta 0), reused 0 (delta 0)
// remote:
// remote: Create a pull request for 'elisabeth-earley' on GitHub by visiting:
// remote:      https://github.com/elisabethearley/team-builder/pull/new/elisabeth-earley
// remote:
// To https://github.com/elisabethearley/team-builder.git
//  * [new branch]      elisabeth-earley -> elisabeth-earley
// Branch 'elisabeth-earley' set up to track remote branch 'elisabeth-earley' from 'origin'.

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git status
// On branch elisabeth-earley
// Your branch is up to date with 'origin/elisabeth-earley'.

// Changes not staged for commit:
//   (use "git add/rm <file>..." to update what will be committed)
//   (use "git restore <file>..." to discard changes in working directory)
//         modified:   src/App.js
//         deleted:    src/Form.js

// Untracked files:
//   (use "git add <file>..." to include in what will be committed)
//         src/Components/
//         src/data.js

// no changes added to commit (use "git add" and/or "git commit -a")

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git add .
// warning: LF will be replaced by CRLF in src/App.js.
// The file will have its original line endings in your working directory

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git commit -m "refacturing code to make more sense"
// [elisabeth-earley 4ba2b57] refacturing code to make more sense
//  4 files changed, 66 insertions(+), 18 deletions(-)
//  create mode 100644 src/Components/Form.js
//  delete mode 100644 src/Form.js
//  create mode 100644 src/data.js

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git push
// Enumerating objects: 10, done.
// Counting objects: 100% (10/10), done.
// Delta compression using up to 4 threads
// Compressing objects: 100% (6/6), done.
// Writing objects: 100% (7/7), 1.10 KiB | 374.00 KiB/s, done.
// Total 7 (delta 2), reused 0 (delta 0)
// remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
// To https://github.com/elisabethearley/team-builder.git
//    c59cf25..4ba2b57  elisabeth-earley -> elisabeth-earley

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git add .

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git commit -m "added components to App.js for new member and form, added data.js for member info"
// On branch elisabeth-earley
// Your branch is up to date with 'origin/elisabeth-earley'.

// nothing to commit, working tree clean

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git add .
// warning: LF will be replaced by CRLF in src/App.js.
// The file will have its original line endings in your working directory

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git commit -m "created state variable, created changeHandler and submitForm variables, created form in form.js"
// [elisabeth-earley a9c2aa3] created state variable, created changeHandler and submitForm variables, created form in form.js
//  3 files changed, 42 insertions(+), 26 deletions(-)
//  rewrite src/Components/Form.js (73%)

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git checkout master
// error: Your local changes to the following files would be overwritten by checkout:
//         src/App.js
//         src/Components/Form.js
// Please commit your changes or stash them before you switch branches.
// Aborting

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git add .
// warning: LF will be replaced by CRLF in src/App.js.
// The file will have its original line endings in your working directory

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git commit -m "changed some code around in App and Form.js, added members info to App.js"
// [elisabeth-earley 7ce32d8] changed some code around in App and Form.js, added members info to App.js
//  3 files changed, 101 insertions(+), 47 deletions(-)
//  rewrite src/Components/Form.js (74%)
//  create mode 100644 src/Components/Member.js

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git add .
// warning: LF will be replaced by CRLF in src/App.js.
// The file will have its original line endings in your working directory

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git commit -m "deleted data.js file"
// [elisabeth-earley d5694c4] deleted data.js file
//  2 files changed, 31 insertions(+), 34 deletions(-)
//  delete mode 100644 src/data.js

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $ git push
// Enumerating objects: 24, done.
// Counting objects: 100% (24/24), done.
// Delta compression using up to 4 threads
// Compressing objects: 100% (17/17), done.
// Writing objects: 100% (18/18), 2.63 KiB | 449.00 KiB/s, done.
// Total 18 (delta 10), reused 0 (delta 0)
// remote: Resolving deltas: 100% (10/10), completed with 4 local objects.
// To https://github.com/elisabethearley/team-builder.git
//    4ba2b57..d5694c4  elisabeth-earley -> elisabeth-earley

// Zaija Office@DESKTOP-MJUSL0I MINGW64 ~/team-builder (elisabeth-earley)
// $

