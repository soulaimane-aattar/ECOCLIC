import { MigrationInterface, QueryRunner } from "typeorm";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { F_comptet } from "../entity/F_comptet";
import { Role } from "../entity/Role";
import { F_article } from "../entity/F_article";
import { plainToClass } from "class-transformer";

const mockArticles = [
  {
    articleCodeBare: "233423433343",
    articleRef: "1223",
    prix: 235,
    name: "Shoes",
    description: "Ice cream is made with carrageenan …",
    image:
      "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
  {
    articleCodeBare: "23b423433343",
    articleRef: "1224",
    prix: 160,
    name: "Product 2 ",
    description: "Is makeup one of your daily esse …",
    image:
      "https://images.unsplash.com/photo-1519368358672-25b03afee3bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2004&q=80",
  },
  {
    articleCodeBare: "23bc23433343",
    prix: 360,
    articleRef: "1225",
    name: "Product 3 ",
    description: "Coffee is more than just a drink: It’s …",
    image:
      "https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
  },
  {
    articleCodeBare: "23b323433343",
    prix: 400,
    articleRef: "1226",
    name: "Product 4 ",
    description: "Fashion is a popular style, especially in …",
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1326&q=80",
    cta: "View article",
  },
  {
    articleCodeBare: "23br23433343",
    prix: 120,
    articleRef: "1227",
    name: "Product 5 ",
    description: "Argon is a great free UI packag …",
    image:
      "https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?fit=crop&w=1947&q=80",
  },
];

export class addAdmin1597669919664 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //adding role client

    let role = new Role();
    role.roleName = "client";

    const RoleRepository = getRepository(Role);
    await RoleRepository.save(role);

    let user = new User();
    user.username = "admin";
    user.userPassword = "admin";
    user.userFirstName = "Hamza";
    user.userLastName = "aziz";
    user.userPhoto = "ahhhaahaha.png";
    user.positionLangitude = "444544554";
    user.positionLatitude = "549848456";

    //get role

    user.role = await RoleRepository.createQueryBuilder("role")
      .where("role.roleName = :name", { name: "client" })
      .getOne();
    /* user.f_compte = plainToClass(
      F_comptet,
      getRepository(F_comptet).find({ where: { compteIntitule: "google" } })
    );*/
    user.hashPassword();
    const userRepository = getRepository(User);
    await userRepository.save(user);

    // insert  articles

    const articlesRepository = getRepository(F_article);
    let articles = mockArticles.map((a) => {
      //let a = mockArticles[0];
      let article = new F_article();
      article.articleName = a.name;
      article.articlePhoto = a.image;
      article.articleDescription = a.description;
      article.user = user;
      article.articleCodeBare = a.articleCodeBare;
      article.articlePrice = a.prix;
      article.articleRef = a.articleRef;
      return article;
    });
    try {
      await articlesRepository.save(articles);
    } catch (e) {
      console.log(e);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
