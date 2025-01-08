"use client";
import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import styles from "./page.module.css";

export default function Home() {
  const sceneRef = useRef(null);
  const boxARef = useRef(null);
  const boxBRef = useRef(null);

  const boxes = [
    { text: "Hellow", bg: "yellow" },
    { text: "Hellow 2", bg: "red" },
    { text: "Hellow 3", bg: "blue" },
    { text: "Hellow 4", bg: "green" },
    { text: "Hellow 5", bg: "purple" },
    { text: "Hellow 6", bg: "purple" },
    { text: "Hellow 6", bg: "purple" },
    { text: "Hellow 6", bg: "purple" },
  ];

  useEffect(() => {
    function initSimulation() {
      var Engine = Matter.Engine,
        Render = Matter.Render,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Bodies = Matter.Bodies,
        Runner = Matter.Runner,
        Composite = Matter.Composite;

      var engine = Engine.create();

      var containerElement = document.querySelector(".tag-canvas");
      var containerWidth = containerElement.clientWidth + 2;
      var containerHeight = containerElement.clientHeight + 2;

      var render = Render.create({
        element: containerElement,
        engine: engine,
        options: {
          width: containerWidth,
          height: containerHeight,
          pixelRatio: 2,
          background: "transparent",
          border: "none",
          wireframes: false,
        },
      });

      var ground = Bodies.rectangle(
        containerWidth / 2 + 160,
        containerHeight + 80,
        containerWidth + 320,
        160,
        { render: { fillStyle: "#000000" }, isStatic: true }
      );
      var wallLeft = Bodies.rectangle(
        -80,
        containerHeight / 2,
        160,
        containerHeight,
        { isStatic: true }
      );
      var wallRight = Bodies.rectangle(
        containerWidth + 80,
        containerHeight / 2,
        160,
        1200,
        { isStatic: true }
      );
      var roof = Bodies.rectangle(
        containerWidth / 2 + 160,
        -80,
        containerWidth + 320,
        160,
        { isStatic: true }
      );

      var border = 1;
      var radius = 20;

      var tagUiUx = Bodies.rectangle(containerWidth / 2 + 150, 500, 164, 56, {
        chamfer: { radius: radius },
        render: {
          sprite: {
            texture:
              "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd641997b19303b1f82fb1_64f47540487abf2c397d777f_webflow-green%202.svg",
            xScale: 1,
            yScale: 1,
          },
        },
      });
      var tagWordpress = Bodies.rectangle(
        containerWidth / 2 + 150,
        460,
        240,
        56,
        {
          chamfer: { radius: radius },
          render: {
            sprite: {
              texture:
                "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd6419dec16540f72f6810_64f47540487abf2c397d777f_webflow-green%204.svg	",
              xScale: 1,
              yScale: 1,
            },
          },
        }
      );
      var tagWebflow = Bodies.rectangle(
        containerWidth / 2 + 250,
        420,
        200,
        56,
        {
          chamfer: { radius: radius },
          render: {
            sprite: {
              texture:
                "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd641918ffc46b3df25377_64f47540055ab00edffa0a68_wordpress%203.svg",
              xScale: 1,
              yScale: 1,
            },
          },
        }
      );
      var tagWhitelevel = Bodies.rectangle(
        containerWidth / 2 - 75,
        380,
        160,
        56,
        {
          chamfer: { radius: radius },
          render: {
            sprite: {
              texture:
                "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd64192f6ed23bce9f3676_64f47540035d9b03fc33e447_integration%201.svg",
              xScale: 1,
              yScale: 1,
            },
          },
        }
      );

      var tagWebflowgreen = Bodies.rectangle(
        containerWidth / 2 - 74,
        540,
        248,
        56,
        {
          chamfer: { radius: radius },
          render: {
            sprite: {
              texture:
                "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd6419a9ac9cec6939a4f1_64f475407a05afc618131310_figma%202.svg",
              xScale: 1,
              yScale: 1,
            },
          },
        }
      );
      var tagSass = Bodies.rectangle(containerWidth / 2 + 174, 490, 105, 56, {
        chamfer: { radius: radius },
        render: {
          sprite: {
            texture:
              "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd64193de86b5508b74dfc_64f47540f762b61424410849_web%203.svg",
            xScale: 1,
            yScale: 1,
          },
        },
      });
      var tagWeb = Bodies.rectangle(containerWidth / 2 - 142, 440, 186, 56, {
        chamfer: { radius: radius },
        render: {
          sprite: {
            texture:
              "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd641930ed9bceae37f871_64f475405a7c8ff69c27ed00_motion%205.svg",
            xScale: 1,
            yScale: 1,
          },
        },
      });
      var tagStartup = Bodies.rectangle(containerWidth / 2 - 10, 260, 128, 56, {
        chamfer: { radius: radius },
        render: {
          sprite: {
            texture:
              "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd6419079776ced5bc2e7b_64f475406ef461a95eaa0f12_pay%203.svg",
            xScale: 1,
            yScale: 1,
          },
        },
      });
      var tagMaintence = Bodies.rectangle(
        containerWidth / 2 - 242,
        420,
        168,
        56,
        {
          chamfer: { radius: radius },
          render: {
            sprite: {
              texture:
                "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd641930ed9bceae37f856_64f47540f762b61424410849_web%202.svg",
              xScale: 1,
              yScale: 1,
            },
          },
        }
      );
      var tagIntegration = Bodies.rectangle(
        containerWidth / 2 + 60,
        380,
        155,
        56,
        {
          chamfer: { radius: radius },
          render: {
            sprite: {
              texture:
                "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd641997b19303b1f82f56_64f47540f762b61424410849_web%201.svg",
              xScale: 1,
              yScale: 1,
            },
          },
        }
      );
      var tagMotion = Bodies.rectangle(containerWidth / 2, 360, 180, 56, {
        chamfer: { radius: radius },
        render: {
          sprite: {
            texture:
              "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd6419f5bef41881dbdc26_64f475405a7c8ff69c27ed00_motion%203.svg",
            xScale: 1,
            yScale: 1,
          },
        },
      });
      var tagPay = Bodies.rectangle(containerWidth / 2 - 59, 260, 172, 56, {
        chamfer: { radius: radius },
        render: {
          sprite: {
            texture:
              "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd6419ef5ec13a5783cb73_64f475405a7c8ff69c27ed37_webflow%202.svg",
            xScale: 1,
            yScale: 1,
          },
        },
      });
      var tagGsap = Bodies.rectangle(containerWidth / 2 - 59, 260, 115, 56, {
        chamfer: { radius: radius },
        render: {
          sprite: {
            texture:
              "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd6419a528a79d9ba79856_64f47541d38f6886e5747c1d_uiux%202.svg",
            xScale: 1,
            yScale: 1,
          },
        },
      });
      var tagFigma = Bodies.rectangle(containerWidth / 2 - 59, 260, 210, 56, {
        chamfer: { radius: radius },
        render: {
          sprite: {
            texture:
              "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd6419dec16540f72f6733_64f47540f86ad4f4175a1df1_gsap%202.svg",
            xScale: 1,
            yScale: 1,
          },
        },
      });
      var tagMigration = Bodies.rectangle(
        containerWidth / 2 - 59,
        260,
        145,
        56,
        {
          chamfer: { radius: radius },
          render: {
            sprite: {
              texture:
                "https://cdn.prod.website-files.com/66d81dad8a652c1a1dd28dff/66dd64192f6ed23bce9f362b_64f475402ae28c15adeba62f_startup%201.svg",
              xScale: 1,
              yScale: 1,
            },
          },
        }
      );

      Composite.add(engine.world, [
        ground,
        wallLeft,
        wallRight,
        roof,
        tagUiUx,
        tagWordpress,
        tagWebflow,
        tagWhitelevel,
        tagWebflowgreen,
        tagSass,
        tagWeb,
        tagStartup,
        tagMaintence,
        tagIntegration,
        tagMotion,
        tagPay,
        tagGsap,
        tagFigma,
        tagMigration,
      ]);

      var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: false,
            },
          },
        });

      Composite.add(engine.world, mouseConstraint);

      render.mouse = mouse;

      // Run the renderer
      Render.run(render);

      // Create and run the runner
      const runner = Runner.create();
      Runner.run(runner, engine);

      mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

      let click = false;

      document.addEventListener("mousedown", () => (click = true));
      document.addEventListener("mousemove", () => (click = false));
      document.addEventListener("mouseup", () =>
        console.log(click ? "click" : "drag")
      );
    }

    initSimulation();
  }, []);

  return (
    <div className={styles.page}>
      <main
        className={styles.main}
        style={{ position: "relative", width: "100%", height: "100vh" }}
      >
        <div className="container">
          <div
            className="tag-canvas"
            style={{ position: "relative", width: "100%", height: "100vh" }}
          ></div>
        </div>
      </main>
    </div>
  );
}
