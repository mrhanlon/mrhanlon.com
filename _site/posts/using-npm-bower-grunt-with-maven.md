{
  title: "Using npm, bower, and grunt with Maven"
  , date:   "2014-03-03"
  , description: "I have come across several Maven plugins that integrate front-end tools like npm, bower, and grunt. I have found these all to be way more than I need. The Exec Maven Plugin provides pretty much all of the functionality needed to integrate typical front-end development tools into a Maven build."
  , tags: [
  	'java'
  	, 'maven'
  	, 'grunt'
  	, 'npm'
  	, 'bower'
  	, 'build automation'
  ]
}

I was recently migrating several projects from [Apache Ant](http://ant.apache.org/)
to [Apache Maven](http://maven.apache.org). More than one of these projects had
front-end components that used [Grunt.js](http://gruntjs.com/) for various automation
tasks. I had previously integrated these into my Ant build scripts with a custom
target in my `build.xml`:

    <target name="run-grunt">
      <exec executable="grunt" dir="." failonerror="true"></exec>
    </target>

This was working pretty well, but with a couple of inadequacies. The project
included a `package.json` for npm dependencies and a `bower.json` for other
front-end dependencies. The ant target took care of running grunt during the
build, but on a fresh checkout of the project, e.g., for CI, you would always
have to run `npm install; bower install`. Of course I could have made ant
targets for those as well, but that's beside the point.

So, upon migrating the projects to Maven I decided that in addition to needing
to integrate the grunt tasks into the build I also wanted to integrate the
download of all dependencies. After multiple fruitless Google searches I decided
that since I already have node.js and npm (and grunt-cli and bower) installed
everywhere I didn't really need anything fancy, I just needed to fork a command
line execution. My primary beef with most of the plugins I found was that they
each seemed to try really hard to integrate the whole configuration into the
`pom.xml`. I didn't want to end up redefining all of my dependencies, including
npm, bower, etc., in the `pom.xml`; `package.json` works just fine. To me,
keeping these files separate seems more in line with [DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself).

The [Exec Maven Plugin](http://mojo.codehaus.org/exec-maven-plugin/) really
provides all that is needed to handle this. Just add the following to your
`pom.xml`:

	<build>
	  <plugins>
	    <plugin>
	      <groupId>org.codehaus.mojo</groupId>
	      <artifactId>exec-maven-plugin</artifactId>
	      <executions>
	        <execution>
	          <id>exec-npm-install</id>
	          <phase>generate-sources</phase>
	          <configuration>
	            <executable>npm</executable>
	            <arguments>
	              <argument>install</argument>
	            </arguments>
	          </configuration>
	          <goals>
	            <goal>exec</goal>
	          </goals>
	        </execution>
	        <execution>
	          <id>exec-bower-install</id>
	          <phase>generate-sources</phase>
	          <configuration>
	            <executable>bower</executable>
	            <arguments>
	              <argument>install</argument>
	            </arguments>
	          </configuration>
	          <goals>
	            <goal>exec</goal>
	          </goals>
	        </execution>
	        <execution>
	          <id>exec-grunt</id>
	          <phase>process-resources</phase>
	          <configuration>
	            <executable>grunt</executable>
	          </configuration>
	          <goals>
	            <goal>exec</goal>
	          </goals>
	        </execution>
	      </executions>
	    </plugin>
	  </plugins>
	</build>

You keep all of you npm dependencies in `package.json`, bower dependencies in
`bower.json`, and your grunt config stays in `Gruntfile.js`.

I played around a little bit with the `<phase>` settings for each execution.
Pretty much you just want to ensure that `exec-npm-install` and
`exec-bower-install` happen before `exec-grunt`. Depending on the grunt tasks
you are executing you may need to make sure it executes earlier or later.

