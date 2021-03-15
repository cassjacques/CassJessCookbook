Cass and Jess’ Quarantine Cookbook 

## Scope:

To build an application where users can store their favorite recipes, in addition to editing and deleting stored recipes. 

## User story:

Users will be met with a landing page prompting for USERNAME and PASSWORD login information with a button to log in, as well as a button to signup. 

New users who need to create an account will be directed to a signup page prompting for a USERNAME, EMAIL, and PASSWORD fields to create an account. Once an account has been created, the user will be redirected to the landing page to log in.

The user will then be directed to a profile page where they can add a recipe, and view all saved recipes. Users can also log out on this page. 

Clicking on a recipe will redirect the user to a page showing information for the saved recipe, as well as buttons to edit or delete the individual recipe. 

## Milestones:

https://trello.com/b/miWL3jVt/recipe-application 

<ul>
Sprint 1 - 
<li>Users can see a basic page with a static header and footer.</li>
<li>Users can see a landing page.</li>
<li>Users can log-in or sign-up.</li>
<li>Users can see their profile page.</li>
</ul>

<ul>
Sprint 2 -
<li>Users can add a recipe and add a sorting type.</li>
<li>Users can select a sorting type.</li>
<li>Users can see all available recipes page. </li>
<li>Users can select individual recipes. </li>
</ul>

<ul>
Sprint 3 -
<li>Users can see individual recipes.</li>
Within the recipe page:
<li>Users can delete the recipe.</li>
<li>Users can edit the recipe.</li>
</ul>

<ul>
Sprint 4 - 
<li>Users can see styled views on pages.</li>
<li>Stretch goal: Users can add and select a sorting type, such as 'vegetarian' or 'meat'.</li>
<li>Stretch goal: add recipe difficulty level.</li>
<li>Stretch goal: sort recipes by type && difficulty.</li>
</ul>


## Wireframe/ERD:

![image_2021-01-15_12-55-55](https://media.git.generalassemb.ly/user/32534/files/705e2280-5736-11eb-888f-64b578accce1)

## Database Models:

![image_2021-01-15_12-55-55](https://media.git.generalassemb.ly/user/32534/files/743e7480-5737-11eb-97f9-4f81c3b492d5)

## Technologies Used:
<ul>
<li>HTML</li>
<li>CSS</li>
<li>Node.js</li>
<li>Express</li>
<li>EJS</li>
<li>MongoDB</li>
<li>Mongoose</li>
</ul>

## Code Snips:

```
router.post('/:userId/recipes', (req, res) => {

    const context = {
        recipeTitle: req.body.recipeTitle,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        recipeType: req.body.recipeType,
        user: req.params.userId,
    }
    console.log(req.params.userId);
    db.Recipe.create(context, (err, newRecipe) => {
        if (err) {
            console.log(err);
        }

        db.User.findById(req.params.userId, (err, foundUser) => {
            if (err) {
                console.log(err);
            }
            
            foundUser.recipes.push(newRecipe
            );

            foundUser.save((err, savedUser) => {
                if (err) {
                    console.log(err);
                }

                res.redirect(`/users/${savedUser._id}`);
            });
        });
    });
}); 
```
